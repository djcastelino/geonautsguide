import { useEffect, useRef } from 'react';

export default function IstanbulArrival({ opened }) {
  const host = useRef(null);
  const travel = useRef(false);
  useEffect(() => { travel.current = opened; }, [opened]);

  useEffect(() => {
    const container = host.current;
    let disposed = false;
    let cleanup = () => {};

    import('three').then(T => {
      if (disposed) return;
      let renderer;
      try {
        renderer = new T.WebGLRenderer({ antialias: true, alpha: false });
      } catch {
        return;
      }
      const scene = new T.Scene();
      scene.background = new T.Color('#182938');
      scene.fog = new T.FogExp2('#253844', .013);
      const camera = new T.PerspectiveCamera(48, 1, .1, 180);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.append(renderer.domElement);
      const geometries = {
        box: new T.BoxGeometry(1, 1, 1),
        dome: new T.SphereGeometry(1, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2),
        cone: new T.ConeGeometry(1, 1, 12),
      };
      const materials = Object.fromEntries(Object.entries({
        water: '#21434d', shore: '#263639', stone: '#536366', dark: '#273943', roof: '#364851',
        gold: '#ffc379', hull: '#1e292d', white: '#d8c4a4', rail: '#3d3834', sun: '#e5a975',
      }).map(([id, color]) => [id, id === 'gold' || id === 'sun' ? new T.MeshBasicMaterial({ color }) : new T.MeshLambertMaterial({ color })]));
      function mesh(shape, material, x, y, z, w, h, d, parent = scene) {
        const item = new T.Mesh(geometries[shape], materials[material]);
        item.position.set(x, y, z);
        item.scale.set(w, h, d);
        parent.add(item);
        return item;
      }
      scene.add(new T.HemisphereLight('#edd3ac', '#3a5971', 2.2));
      mesh('box', 'water', 0, -.25, -22, 170, .5, 130);
      mesh('box', 'shore', 0, .25, -41, 100, .5, 21);
      mesh('dome', 'sun', 22, 5, -75, 5, 5, 5);
      for (let i = 0; i < 34; i++) {
        const x = (i - 17) * 2.65;
        const h = 1.7 + ((i * 17) % 11) * .34;
        const z = -34 - (i % 3) * 2;
        mesh('box', i % 2 ? 'stone' : 'dark', x, h / 2, z, 2.3, h, 2.8);
        for (let floor = 1; floor < h; floor += .8) {
          mesh('box', 'gold', x - .5, floor, z + 1.41, .2, .26, .03);
          if (i % 3 !== 0) mesh('box', 'gold', x + .5, floor, z + 1.41, .2, .26, .03);
        }
      }
      mesh('box', 'stone', 9, 2.4, -39, 9, 4.8, 8);
      mesh('dome', 'roof', 9, 4.8, -39, 4.4, 3.2, 4.1);
      for (const x of [3, 15]) {
        mesh('box', 'stone', x, 5.2, -38, .5, 10.4, .5);
        mesh('cone', 'roof', x, 11.3, -38, .54, 1.8, .54);
      }
      for (let i = 0; i < 72; i++) {
        const x = ((i * 17) % 59) - 24;
        const z = -31 + ((i * 13) % 45);
        mesh('box', i % 6 === 0 ? 'gold' : 'roof', x, .015, z, .3 + i % 7 * .19, .015, .07);
      }
      const ferry = new T.Group();
      scene.add(ferry);
      mesh('box', 'hull', 0, .37, 0, 8.6, .65, 2.4, ferry);
      mesh('box', 'white', 0, .91, 0, 6.5, .65, 1.9, ferry);
      mesh('box', 'roof', 0, 1.35, 0, 6.8, .24, 2, ferry);
      mesh('box', 'hull', .9, 1.72, 0, .45, .55, .4, ferry);
      for (let i = -2; i <= 2; i++) mesh('box', 'gold', i, .99, .96, .6, .27, .03, ferry);
      for (let i = 0; i < 8; i++) {
        mesh('box', 'rail', 14 + i * 2.2, .7, 7, .18, 1.4, .18);
      }
      mesh('box', 'rail', 21, 1.37, 7, 16, .13, .13);
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const observer = new ResizeObserver(() => {
        const { clientWidth, clientHeight } = container;
        if (!clientWidth || !clientHeight) return;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      });
      observer.observe(container);
      let started = null;
      renderer.setAnimationLoop(ms => {
        if (travel.current && started === null) started = ms;
        const t = started === null ? 0 : reduced ? 1 : Math.min(1, (ms - started) / 1500);
        const eased = 1 - (1 - t) ** 3;
        camera.position.set(13 - 4 * eased, 5.8 - 1.8 * eased, 19 - 15 * eased);
        camera.lookAt(3, 2, -24);
        ferry.position.set(12 + eased * 6, reduced ? 0 : Math.sin(ms / 900) * .08, -2 - eased * 3);
        renderer.render(scene, camera);
        if (t === 1) renderer.setAnimationLoop(null);
      });
      cleanup = () => {
        observer.disconnect();
        renderer.setAnimationLoop(null);
        for (const geometry of Object.values(geometries)) geometry.dispose();
        for (const material of Object.values(materials)) material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => {});
    return () => { disposed = true; cleanup(); };
  }, []);

  return <div className="mt-webgl" ref={host}/>;
}

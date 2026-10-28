import { useState } from 'react';
import { apiUrl } from '../services/backend';

function ImageWithRecovery({ landmark, ...props }) {
  const [source, setSource] = useState(landmark.imageUrl);
  const [recovering, setRecovering] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const recover = async () => {
    if (recovering) { setUnavailable(true); return; }
    setRecovering(true);
    try {
      const response = await fetch(apiUrl(`/api/landmark-image?id=${encodeURIComponent(landmark.id)}`));
      if (!response.ok) throw new Error('Photo unavailable');
      const data = await response.json();
      if (!data.imageUrl || data.imageUrl === source) throw new Error('Photo unavailable');
      setSource(data.imageUrl);
    } catch { setUnavailable(true); }
  };
  return unavailable
    ? <div className={`${props.className || ''} flex items-center justify-center bg-slate-200 text-slate-600`} role="img" aria-label={`${landmark.name}: photograph unavailable`}>Photograph unavailable</div>
    : <img {...props} src={source} alt={landmark.name} onError={recover} />;
}

export default function LandmarkImage(props) {
  return <ImageWithRecovery key={props.landmark.id} {...props} />;
}

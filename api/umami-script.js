export default async function handler(req, res) {
  try {
    const response = await fetch('http://192.227.172.231:3005/script.js');
    const text = await response.text();
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.status(200).send(text);
  } catch (e) {
    res.setHeader('Content-Type', 'application/javascript');
    return res.status(200).send('');
  }
}

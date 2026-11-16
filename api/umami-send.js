export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false });
  }
  try {
    const clientIp =
      (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
      req.headers['x-real-ip'] ||
      '';
    const userAgent = req.headers['user-agent'] || '';
    const bodyStr = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    const upstream = await fetch('http://192.227.172.231:3005/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': userAgent,
        ...(clientIp ? { 'X-Forwarded-For': clientIp, 'CF-Connecting-IP': clientIp } : {}),
      },
      body: bodyStr,
    });
    const text = await upstream.text();
    return res.status(upstream.status).send(text);
  } catch (e) {
    return res.status(200).json({ ok: true });
  }
}

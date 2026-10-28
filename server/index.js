import express from 'express';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { handleApi, landmarkImage } from './handlers.js';
import assetlinks from '../api/assetlinks.js';

export const app = express();
app.disable('x-powered-by');
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',').map(value => value.trim()).filter(Boolean);
app.use('/api', (req, res, next) => {
  if (allowedOrigins.includes(req.headers.origin)) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  }
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});
app.use(express.json({ limit: '64kb' }));
app.get('/healthz', (req, res) => res.json({ status: 'ok' }));
app.get(['/.well-known/assetlinks.json', '/api/assetlinks'], assetlinks);
app.get('/api/landmark-image', landmarkImage);
app.all('/api/:action', (req, res) => handleApi(req.params.action, req, res));
app.use('/api', (req, res) => res.status(404).json({ error: 'Unknown API endpoint.' }));
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
app.use(express.static(dist));
app.get('/{*path}', (req, res) => {
  if (path.extname(req.path)) return res.sendStatus(404);
  res.sendFile(path.join(dist, 'index.html'));
});
// Keep parse errors JSON so the app can show a useful error instead of HTML.
app.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = error.status === 413 ? 413 : error instanceof SyntaxError ? 400 : 500;
  res.status(status).json({ error: status === 413 ? 'Request too large.' : status === 400 ? 'Invalid JSON request.' : 'Internal server error.' });
});

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  app.listen(Number(process.env.PORT) || 3001, '0.0.0.0', () => console.log('Geonauts Guide server is ready.'));
}

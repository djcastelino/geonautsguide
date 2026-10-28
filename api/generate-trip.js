import { handleApi } from '../server/handlers.js';
export default function handler(req, res) { return handleApi('generate-trip', req, res); }

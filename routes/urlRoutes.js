import express from 'express';
import { shortenUrl, redirectToOriginal } from '../controllers/urlController.js';

const router = express.Router();

router.post('/shorten', shortenUrl);
router.get('/:shortId', redirectToOriginal);

export default router;

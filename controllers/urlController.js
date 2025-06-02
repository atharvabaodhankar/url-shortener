import Url from '../models/Url.js';
import { nanoid } from 'nanoid';

export const shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: 'Original URL is required' });
  }

  let shortId;
  let exists = true;

  // Keep generating until a unique shortId is found
  while (exists) {
    shortId = nanoid(6);
    const existing = await Url.findOne({ shortId });
    if (!existing) {
      exists = false;
    }
  }

  try {
    const newUrl = await Url.create({ originalUrl, shortId });
    res.json({ shortUrl: `http://localhost:3000/${shortId}` });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};


export const redirectToOriginal = async (req, res) => {
  const { shortId } = req.params;

  try {
    const urlEntry = await Url.findOne({ shortId });

    if (urlEntry) {
      res.redirect(urlEntry.originalUrl);
    } else {
      res.status(404).json({ error: 'Short URL not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
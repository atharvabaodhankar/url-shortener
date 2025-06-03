import { useState } from 'react';
import { shortenUrl } from './api';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await shortenUrl(originalUrl);
      setShortUrl(data.shortUrl);
    } catch (err) {
      alert('Error shortening URL');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🔗 URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter long URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
          style={{ padding: '0.5rem', width: '300px' }}
        />
        <button type="submit" style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>
          Shorten
        </button>
      </form>

      {shortUrl && (
        <p style={{ marginTop: '1rem' }}>
          Short URL: <a href={shortUrl} target="_blank">{shortUrl}</a>
        </p>
      )}
    </div>
  );
}

export default App;

import { useState } from 'react';
import { shortenUrl } from './api';


import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setShortUrl('');
    try {
      const data = await shortenUrl(originalUrl);
      setShortUrl(data.shortUrl);
    } catch (err) {
      setError('Could not shorten the URL. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>🔗 URL Shortener</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="url"
            placeholder="Paste your long URL here..."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
            disabled={loading}
          />
          <button type="submit" disabled={loading || !originalUrl}>
            {loading ? 'Shortening...' : 'Shorten URL'}
          </button>
        </form>
        {error && (
          <div style={{ color: '#ff5858', marginTop: '1rem', fontWeight: 500 }}>{error}</div>
        )}
        {shortUrl && !error && (
          <div className="short-url-section">
            <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Here is your short URL:</div>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
            <button
              style={{
                marginTop: '1rem',
                background: '#fff',
                color: '#f857a6',
                border: '1.5px solid #fff',
                fontWeight: 600,
                boxShadow: 'none',
                borderRadius: '0.75rem',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}
              onClick={() => {
                navigator.clipboard.writeText(shortUrl);
              }}
            >
              Copy Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

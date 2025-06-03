const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("API_BASE_URL:", API_BASE_URL);

export const shortenUrl = async (originalUrl) => {
  const response = await fetch(`${API_BASE_URL}/shorten`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ originalUrl })
  });

  const data = await response.json();
  return data;
};

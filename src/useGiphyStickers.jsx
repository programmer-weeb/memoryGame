import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_GIFY_AHMED_API_KEY;

export function useGiphyStickers({ limit = 8, query = "" } = {}) {
  const [stickers, setStickers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStickers = async () => {
      setLoading(true);
      setError(null);

      try {
        const endpoint = query
          ? `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${query}&limit=${limit}`
          : `https://api.giphy.com/v1/stickers/trending?api_key=${API_KEY}&limit=${limit}`;

        const res = await fetch(endpoint);

        if (!res.ok) {
          throw new Error("Failed to fetch stickers");
        }

        const data = await res.json();
        setStickers(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStickers();
  }, [limit, query]);

  return { stickers, loading, error };
}

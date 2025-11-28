'use client';
import { useState } from 'react';
import axios from 'axios';

export default function UrlForm({ onCreated }: { onCreated?: () => void }) {
  const [originalUrl, setOriginalUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<any>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setResult(null);
    setLoading(true);

    try {
      const res = await axios.post('/api/urls', { originalUrl });
      setResult(res.data);
      setOriginalUrl('');
      onCreated?.();
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Erro ao criar seu link');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <input
          value={originalUrl}
          onChange={e => setOriginalUrl(e.target.value)}
          placeholder="Cole a URL a ser encurtada aqui"
          className="w-full border rounded p-2 text-center"
          required
        />
      </div>
      <br />
      <div className="flex gap-2">
        <button disabled={loading} className="px-4 py-2 w-full bg-sky-600 hover:bg-sky-700 cursor-pointer text-white rounded font-bold">
          {loading ? 'Encurtando...' : 'Encurtar'}
        </button>
      </div>

      {error && <div className="text-red-800 text-center">{error}</div>}

      {result && (
        <div className="p-3 bg-gray-100 rounded">
          <div>Link Encurtado: <a href={result.shortUrl} target="_blank" rel="noreferrer" className="text-sky-600">{result.shortUrl}</a></div>
          <div className="text-sm text-gray-600">{result.originalUrl}</div>
        </div>
      )}
    </form>
  );
}

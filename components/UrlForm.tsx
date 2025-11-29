'use client';
import { useState } from 'react';
import axios from 'axios';

export default function UrlForm({ onCreated }: { onCreated?: () => void }) {
  const [originalUrl, setOriginalUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<any>(null);
  const [expiresInDays, setexpiresInDays] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setResult(null);
    setexpiresInDays(null);
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:3000/api/v1/urls', { originalUrl, expiresInDays: expiresInDays || undefined, });
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
      <div className='flex gap-2'>
        <input
          value={originalUrl}
          onChange={e => setOriginalUrl(e.target.value)}
          placeholder="Cole a URL a ser encurtada aqui"
          className="w-full border rounded p-2 text-center"
          required
        />
        <input
          type="number"
          min={1}
          placeholder="Expira em (dias)"
          className="w-full border rounded p-2 text-center max-w-[200px]"
          onChange={e => setexpiresInDays(Number(e.target.value))}
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
        <div className="p-3 bg-gray-100 rounded text-center space-y-1">
          <div>Link Encurtado: <a href={result.shortUrl} target="_blank" rel="noreferrer" className="text-sky-600">{result.shortUrl}</a></div>
          <div className="text-sm text-gray-600">{result.originalUrl}</div>
        </div>
      )}
    </form>
  );
}

"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UrlList() {
  const [data, setData] = useState<{ items: any[] }>({ items: [] });
  const [page, setPage] = useState(1);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  async function fetchList() {
    const res = await axios.get(`http://localhost:3000/api/v1/urls?page=${page}&per_page=10`);
    setData(res.data);
  }

  useEffect(() => {
    async function load() {
      await fetchList();
    }
    load();
  }, [page]);

  async function handleCopy(text: string, id: number) {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  }

  return (
    <div>
      <table className="w-full text-left min-h-52">
        <thead>
          <tr className="border-b">
            <th>Origem</th>
            <th>Encurtada</th>
            <th>Cliques</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {data.items.map((u) => (
            <tr key={u.id} className="border-b">
              <td className="p-2">{u.originalUrl}</td>
              <td className="p-2">
                <a
                  href={u.shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 underline"
                >
                  {u.shortUrl}
                </a>
              </td>

              <td className="p-2">{u.hits}</td>

              <td className="p-2">
                <button
                  onClick={() => handleCopy(u.shortUrl, u.id)}
                  className="px-3 py-1 border rounded"
                >
                  {copiedId === u.id ? "Copiado!" : "Copiar"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex gap-2 justify-around items-center w-full">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-3 py-1 border rounded cursor-pointer hover:bg-gray-200 hover:text-black"
        >
          Anterior
        </button>

        <div className="font-bold">Página {page}</div>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 border rounded cursor-pointer hover:bg-gray-200 hover:text-black"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

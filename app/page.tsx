'use client';
import { useState } from 'react';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Encurtador de URLs</h1>
      <UrlForm onCreated={() => setRefreshKey(k => k + 1)} />
      <div className="mt-8">
        <UrlList key={refreshKey} />
      </div>
    </main>
  );
}

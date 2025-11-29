'use client';
import UrlForm from '../components/UrlForm';
import UrlList from '../components/UrlList';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Image
        src="/logo.png"
        alt="NeoShortener Logo"
        width={400}
        height={100}
        className="mx-auto mb-6"
      />
      <br />
      <UrlForm onCreated={() => setRefreshKey(k => k + 1)} />
      <div className="mt-8">
        <UrlList key={refreshKey} />
      </div>
    </main>
  );
}

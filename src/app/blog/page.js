'use client';

import FetchTitle from './components/FetchTitle';

async function getData() {
  const response = await fetch('http://localhost:1024/api/tribe/se');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
}

export default async function Blog() {
  const initialData = await getData();

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mt-24 mx-auto px-12 py-4">
        <h1 className="text-4xl font-bold text-center">Main Blog</h1>
        <FetchTitle initialData={initialData.data} />
      </div>
    </main>
  );
}
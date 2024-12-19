'use client';

import React from 'react'
import Texteditor from "./components/Texteditor";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col">

      <div className="container mt-24 mx-auto px-12 py-4">
        <Texteditor />  
      </div>
      
    </main>
  );
}
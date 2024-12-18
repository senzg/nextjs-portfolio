'use client';

import React from 'react'
import Navbar from "../components/Navbar";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import Texteditor from "./components/Texteditor";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        
        <Texteditor />  
      </div>

      <div className="bg-[#121212]">
        <Footer />
      </div>
      
    </main>
  );
}
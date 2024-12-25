import React from 'react';
import {promises as fs} from 'fs';

async function getDocData(){
    const filePath = process.cwd() + '/src/data/docs/docsList.json';
    const file = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(file);
  return data; 
}

export default async function DocID({params}){
    const allDocData = await getDocData()
  return (
    <main className="flex min-h-screen flex-col">
        <div className="container mt-24 mx-auto px-12 py-4">

        {allDocData.filter((doc) => doc.id === parseInt(params.DocID)).map((doc) => (
            <div className="container mt-24 mx-auto px-12 py-4" key={doc.id}>
                <h1 className="text-4xl font-bold text-center">Document ID: {doc.id}</h1>
                <h1 className="text-4xl font-bold text-center">Document Title: {doc.title}</h1>
                <p className="text-4xl font-bold text-center">{doc.content}</p>
            </div>
        ))}
      </div>
    </main>
  )
}


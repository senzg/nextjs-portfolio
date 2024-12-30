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
    const repoData = allDocData.filter((repo) => repo.repoId === parseInt(params.RepoID))[0]
    const docData = repoData.documents.filter((doc) => doc.docId === parseInt(params.DocID))[0]
  
    if(!docData){
      return (
        <main className="flex min-h-screen flex-col">
            <div className="container mt-24 mx-auto px-12 py-4">
                <h1 className="text-4xl font-bold text-center">Document Not Found</h1>
            </div>
        </main>
      )
    }
  return (
    <main className="flex min-h-screen flex-col">
        <div className="container mt-24 mx-auto px-12 py-4">
            <h1 className="text-4xl font-bold text-center">{docData.title}</h1>
            <hr className='border-black border-1 my-4' />
            <div className="mt-4 text-4xl  text-center">
                <p>{docData.content}</p>  
            </div>
        
      </div>
    </main>
  )
}


'use client'

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {useState} from 'react';

const DocSidebar = ({ docHeaders }) => {
    const [showSubmenu, setShowSubmenu] = useState(null);
    console.log(showSubmenu)

    function handleRepoClick(repoId){
      console.log(docHeader.repoId)
      console.log(repoId)
      setShowSubmenu(repoId);
      console.log(repoId)
    }

    return (
        <aside className="w-24 sm:w-48 md:w-64 min-h-screen bg-[#121212] text-white fixed">
        <div className="ml-2 mt-24 px-1 py-4">
          <Link 
                href={`/document/`}
              >
                <h2 className="text-xl font-bold">Document List</h2>
          </Link>
          
          <ul className="mt-4">
            {docHeaders.map(docHeader => (
              <>
              <div class='main-repo' className='font-bold'>
                <li key={docHeader.repoId} className="py-2">
                  <button onClick={() => handleRepoClick(docHeader.repoId)} className="px-4">
                    {docHeader.repoTitle}
                    {showSubmenu === docHeader.repoId ? '-' : '+'}
                  </button>
                </li>
              </div>
              <div class='sub-repo' className='ml-8'>
                <ul class="sub-menu" className={showSubmenu === docHeader.repoId ? 'block' : 'hidden'}>
                  {docHeader.documents.map(doc => (
                    <li key={doc.docId} className="py-2">
                      <Link 
                        href={`/document/${docHeader.repoId}/${doc.docId}`}
                        // className="px-4"
                      >
                        {doc.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              </>
            ))}
            <hr className='border-white border-1 my-4 mr-2' />
            <li key='add' className="py-2">
              <Link 
                href="/document/addDoc"
                className="ml-2 px-6 inline-block py-2 w-full sm:w-fit rounded bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                >
                Add New Document
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    );
};

DocSidebar.propTypes = {
    docHeaders: PropTypes.array.isRequired
}

export default DocSidebar;
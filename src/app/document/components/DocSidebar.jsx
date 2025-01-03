'use client'

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {useState} from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/16/solid'

const DocSidebar = ({ docHeaders }) => {
    const [showSubmenu, setShowSubmenu] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');
    console.log(showSubmenu)
    console.log(docHeaders)

    function handleRepoClick(repoId){
      if(showSubmenu === repoId){
        setShowSubmenu(null);
        return;
      }
      console.log(repoId)
      setShowSubmenu(repoId);
      console.log(repoId)
    }

    function handleSearch(event){
      console.log('searching...')
      setSearchKeyword(event.target.value);
      console.log(searchKeyword)
    }

    
    if(!searchKeyword){
      return (
        <aside className="w-24 sm:w-48 md:w-64 min-h-screen bg-[#121212] text-white fixed">
        <div className="ml-2 mt-24 px-1 py-4">
          <div class='document'>
              <Link href={`/document/`} >
                  <h2 className="text-xl font-bold">Document List</h2>
              </Link>
          </div>
          <div class='document-search' className='mt-2'>
          <input
            type="text"
            id="mySearch"
            onKeyUp={handleSearch}
            placeholder="Search Document..."
            title="Type in a category"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
          </div>

          <div class='document-list'>
          <ul className="mt-2">
            {docHeaders.map(docHeader => (
              <>
              <div class='main-repo' className='font-bold'>
                <li key={docHeader.repoId} className="py-2">
                  <button onClick={() => handleRepoClick(docHeader.repoId)} className="px-1 flex items-center">
                  
                        
                        
                        {showSubmenu === docHeader.repoId ? (
                          <ChevronDownIcon className="h-5 w-5 mr-2" />
                        ) : (
                          <ChevronRightIcon className="h-5 w-5 mr-2" />
                        )} 
                        {docHeader.repoTitle}
                      
                  </button>
                </li>
              </div>
              <div class='sub-repo' className='ml-8 '>
                {showSubmenu &&
                  <ul class="sub-menu" className={showSubmenu === docHeader.repoId ? 'block' : 'hidden'}>
                  {docHeader.documents.map(doc => (
                    <li key={doc.docId} className="py-2">
                      <Link 
                        href={`/document/${docHeader.repoId}/${doc.docId}`}
                      >
                        {doc.title}
                      </Link>
                    </li>
                  ))}
                </ul>}
              </div>
              </>
            ))}
            <hr className='border-[#33353F] border-1 my-4 mr-2' />
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
        </div>
      </aside>
    );
    }
    
    return (
      <aside className="w-24 sm:w-48 md:w-64 min-h-screen bg-[#121212] text-white fixed">
      <div className="ml-2 mt-24 px-1 py-4">
        <div class='document'>
            <Link href={`/document/`} >
                <h2 className="text-xl font-bold">Document List</h2>
            </Link>
        </div>
        <div class='document-search' className='pt-4'>
        <input
            type="text"
            id="mySearch"
            onKeyUp={handleSearch}
            placeholder="Search Document..."
            title="Type in a category"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        <div class='document-list'>
        <ul className="mt-4">
          {docHeaders.map(docHeader => (
            docHeader.documents.map(doc => (
              doc.title.toLowerCase().includes(searchKeyword.toLowerCase()) && (
                <li key={doc.docId} className="py-2">
                  <Link 
                    href={`/document/${docHeader.repoId}/${doc.docId}`}
                  >
                    {doc.title}
                  </Link>
                </li>
            )
          ))))}
    
          <hr className='border-[#33353F] border-2 my-4 mr-2' />
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
      </div>
    </aside>
  );
};

DocSidebar.propTypes = {
    docHeaders: PropTypes.array.isRequired
}

export default DocSidebar;
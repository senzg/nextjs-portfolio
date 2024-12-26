import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const DocSidebar = ({ docsTitles }) => {
    return (
        <aside className="w-24 sm:w-48 md:w-64 min-h-screen bg-[#121212] text-white fixed">
        <div className="ml-2 mt-24 px-1 py-4">
          <Link 
                href={`/document/`}
              >
                <h2 className="text-xl font-bold">Document List</h2>
          </Link>
          
          <ul className="mt-4">
            {docsTitles.map(docsTitle => (

              <li key={docsTitle.id} className="py-2">
              <Link 
                href={`/document/${docsTitle.id}`}
                className="px-4"
              >
                {docsTitle.title}
              </Link>
            </li>
            ))}
            <hr className='border-white border-1 my-4 mr-2' />
            <li className="py-2">
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
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

export default DocSidebar;
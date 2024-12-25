import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const DocSidebar = ({ docsTitles }) => {
    return (
        <aside className="w-24 sm:w-48 md:w-56 min-h-screen bg-[#121212] text-white fixed">
        <div className="mt-24 px-4 py-4">
          <h2 className="text-xl font-bold">Document List</h2>
          <ul className="mt-4">
            {docsTitles.map(docsTitle => (

              <li key={docsTitle.id} className="py-2">
              <Link href={`/document/${docsTitle.id}`}>{docsTitle.title}</Link>
            </li>
            ))}
            <li className="py-2">
              <Link href="/document/addDoc">Add New Document</Link>
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
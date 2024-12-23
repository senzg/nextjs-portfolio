'use client';

import React, { useEffect, useState } from 'react';

const FetchTitle = ({ initialData }) => {
  const [blogTitles, setBlogTitles] = useState(initialData.squads || []);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!initialData.squads) {
      fetch('http://localhost:1024/api/tribe/se')
        .then(response => response.json())
        .then(data => {
          if (data && data.status === 'success' && data.data && data.data.squads) {
            setBlogTitles(data.data.squads);
          } else {
            setError('Failed to fetch data');
          }
        })
        .catch(error => {
          setError('Error fetching data');
        });
    }
  }, [initialData]);

  return (
    <div>
      <h2>Fetch Data</h2>
      {error && <p>{error}</p>}
      <ul>
        {blogTitles.map((squad, index) => (
          <li key={index}>
            <h3>{squad.name}</h3>
            <ul>
              {squad.members.map((member, memberIndex) => (
                <li key={memberIndex}>{member}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchTitle;
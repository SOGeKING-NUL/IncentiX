// RepoSelection.jsx
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepoSelection = ({ setSelectedRepo }) => {
  const [repos, setRepos] = useState([]);
  
  // Fetch the maintainer's repositories on component mount
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/user/repos', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('githubToken')}`,
          },
        });
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Select Repository</h2>
      <ul className="space-y-2">
        {repos.map((repo) => (
          <li
            key={repo.id}
            onClick={() => setSelectedRepo(repo)}
            className="cursor-pointer p-2 rounded hover:bg-emerald-100"
          >
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoSelection;*/

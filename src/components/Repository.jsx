import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Repository = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GitHub API endpoint for the repositories of a user
  const url = 'https://api.github.com/users/Heisenberg300604/repos';

  // GitHub token for Authorization
  // const token = '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'; // Make sure to secure the token in environment variables or secrets for production

  useEffect(() => {
    // Fetch the repositories when the component is mounted
    axios
      .get(url, {
        headers: {
          'Authorization': `token ${token}`,
        },
      })
      .then((response) => {
        setRepos(response.data);  // Store the repositories data
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((err) => {
        setError('Failed to fetch repositories');
        setLoading(false);  // Set loading to false in case of an error
      });
  }, []);

  if (loading) {
    return <p>Loading repositories...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repository;

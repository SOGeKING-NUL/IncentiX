// Repository.jsx
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Repository = () => {
  const { user, isAuthenticated } = useAuth0();
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      if (!isAuthenticated) return;

      try {
        // Extract GitHub token from user metadata
        const githubToken = user["https://your-domain.com/github_token"];
        if (!githubToken) {
          throw new Error("GitHub token not available in user profile.");
        }

        // Use token to fetch repositories from GitHub
        const response = await fetch("https://api.github.com/user/repos", {
          headers: {
            Authorization: `Bearer ${githubToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setError(error.message);
      }
    };

    fetchRepositories();
  }, [isAuthenticated, user]);

  return (
    <div>
      <h2>GitHub Repositories</h2>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Repository;

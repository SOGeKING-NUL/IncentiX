import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IssuesFetcher = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // GitHub API URL
  const GITHUB_API_URL = 'https://api.github.com/issues';
  
  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      setError('');
      try {
        // Fetch issues with the label 'incentix-bounty' from GitHub
        const res = await axios.get(
          'https://api.github.com/search/issues?q=label:incentix-bounty'
        );
        setIssues(res.data.items);
      } catch (err) {
        setError('Failed to fetch issues');
        console.error('Error fetching issues:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchIssues();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Incentix Bounty Issues</h1>

      {loading && <p className="text-center text-xl text-blue-500">Loading issues...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="space-y-4">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="bg-white border-2 border-blue-500 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-blue-600">{issue.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{issue.body || 'No description available'}</p>
            <a
              href={issue.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-4 inline-block"
            >
              View Issue on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssuesFetcher;

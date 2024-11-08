// src/Repocalling.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sidebar } from '../shared/Sidebar';

const Repocalling = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch repos under the "incentix" topic from GitHub
        const fetchRepos = async () => {
            setLoading(true);
            try {
                const res = await axios.get('https://api.github.com/search/repositories?q=topic:incentix');
                setRepos(res.data.items);
            } catch (error) {
                console.error('Error fetching repos:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-1/4 text-white">
                <Sidebar type="contributor" />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Page Heading */}
                <h1 className="text-5xl font-bold text-center text-blue-600 mb-4">
                    Incentix Repositories
                </h1>
                <p className="text-center text-lg text-gray-600 mb-6">
                    Here you will find all repos tagged with "incentix". You can choose the repo you want to contribute to!
                </p>

                {/* Repository List */}
                <div className="space-y-4">
                    {loading ? (
                        <div className="text-center text-lg text-blue-500">Loading repositories...</div>
                    ) : (
                        repos.map((repo) => (
                            <div
                                key={repo.id}
                                className="bg-white border-2 border-blue-500 rounded-lg shadow-lg p-6 flex items-start space-x-4 hover:shadow-2xl transition-shadow"
                            >
                                {/* Repo Owner Profile */}
                                <img
                                    src={repo.owner.avatar_url}
                                    alt={`${repo.owner.login}'s avatar`}
                                    className="w-12 h-12 rounded-full border-2 border-blue-500"
                                />
                                <div className="flex-1">
                                    <h2 className="text-2xl font-semibold text-blue-600">{repo.name}</h2>
                                    <p className="text-sm text-gray-600 mt-2">{repo.description || 'No description available'}</p>
                                    <div className="mt-4 flex space-x-4">
                                        {/* View Repo Button */}
                                        <a 
                                            href={repo.html_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-blue-500 hover:underline"
                                        >
                                            View Repo
                                        </a>
                                        {/* View Issues Button */}
                                        <a 
                                            href={`https://github.com/${repo.owner.login}/${repo.name}/issues?q=is%3Aissue+label%3Aincentix`} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-blue-500 hover:underline"
                                        >
                                            View Issues
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Repocalling;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  GitPullRequest,
  Wallet,
  Settings,
  LogOut,
  Github,
  EuroIcon,
} from 'lucide-react';
import clsx from 'clsx';
import { useAuthStore } from '../../store/auth';

export const Sidebar = ({ type }) => {
  const location = useLocation();
  const logout = useAuthStore((state) => state.logout);

  const maintainerLinks = [
    { to: '/maintainer', icon: Home, label: 'Dashboard' },
    { to: '/maintainer/repositories', icon: Github, label: 'Repositories' },
    { to: '/maintainer/bounties', icon: GitPullRequest, label: 'Create Bounties' },
    { to: '/maintainer/issues', icon: GitPullRequest, label: 'Issues' },
    { to: '/maintainer/wallet', icon: Wallet, label: 'Wallet' },
    { to: '/maintainer/settings', icon: Settings, label: 'Settings' },
    { to: '/maintainer/profile', icon: GitPullRequest, label: 'Profile' },
  ];

  const contributorLinks = [
    { to: '/contributor', icon: Home, label: 'Dashboard' },
    { to: '/contributor/bounties', icon: GitPullRequest, label: 'Solve Bounties' },
    { to: '/contributor/earnings', icon: EuroIcon, label: 'Earnings' },
    { to: '/contributor/repos', icon: GitPullRequest, label: 'Repositories' },
    { to: '/contributor/wallet', icon: Wallet, label: 'Wallet' },
    { to: '/contributor/settings', icon: Settings, label: 'Settings' },
    { to: '/contributor/profile', icon: GitPullRequest, label: 'Profile' },
  ];

  const links = type === 'maintainer' ? maintainerLinks : contributorLinks;

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Incenti<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">X</span></h1>
      
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={clsx(
                  'flex items-center space-x-3 p-3 rounded-lg transition-colors',
                  {
                    'bg-gray-800 text-white': location.pathname === link.to,
                    'text-gray-400 hover:bg-gray-800 hover:text-white':
                      location.pathname !== link.to,
                  }
                )}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={logout}
        className="flex items-center space-x-3 p-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
};
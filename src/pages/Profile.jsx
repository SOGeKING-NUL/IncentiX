import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading...</div>;
      }
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold">Profile Page</h1>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-32 h-32 mb-4 md:mb-0 md:mr-6">
                        <img className="w-full h-full rounded-full object-cover" src="path/to/profile-picture.jpg" alt="Profile" />
                    </div>
                    {isAuthenticated && (<div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold">{user.name}</h2>
                        <p className="text-gray-600">Email: {user.email}</p>
                        <p className="text-gray-600">Location: New York, USA</p>
                        <p className="text-gray-600">Bio: A short bio about John Doe...</p>
                    </div>)}
                    please login then only come
                </div>
            </div>
        </div>
    );
};

export default Profile;
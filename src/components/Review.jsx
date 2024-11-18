import React from 'react';

// Sample reviews data for IncentiX
const reviews = [
    {
        id: 1,
        name: 'Hitesh Chaudhary',
        profileImage: 'h.jpg', 
        rating: 5,
        review: 'IncentiX has redefined how creators get rewarded! The incentivized contributions model encourages more impactful and creative solutions. Highly recommend it!',
    },
    {
        id: 2,
        name: 'Shraddha Kapra',
        profileImage: 'sk.jpg', 
        rating: 4,
        review: 'With payments over blockchain, IncentiX brings transparency and security to our community. It’s a game-changer for digital creators and innovators.',
    },
    {
        id: 3,
        name: 'Harkirat Singh',
        profileImage: 'hs.jpg', 
        rating: 5,
        review: 'Grant-backed development has allowed me to scale my projects without limitations. IncentiX truly empowers tech creators with the support they need.',
    },
    {
        id: 4,
        name: 'Nishant Chahar',
        profileImage: 'n.jpg', 
        rating: 4,
        review: 'The incentive-driven contributions system keeps me motivated to create. IncentiX is transforming the way tech projects are supported and developed!',
    },
];

// Star rating component
const StarRating = ({ rating }) => {
    return (
        <div className="flex justify-center my-2">
            {[...Array(5)].map((_, index) => (
                <span key={index} className={`text-yellow-500 ${index < rating ? 'filled' : 'empty'}`}>
                    {index < rating ? '★' : '☆'}
                </span>
            ))}
        </div>
    );
};

// Review card component
const ReviewCard = ({ review }) => {
    return (
        <div id = 'review'      className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={review.profileImage} alt={review.name} className="w-16 h-16 rounded-full mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-blue-400 text-center">{review.name}</h3>
            <StarRating rating={review.rating} />
            <p className="text-gray-300 text-center">{review.review}</p>
        </div>
    );
};

// Main review section component for IncentiX
const ReviewSection = () => {
    return (
        <div id='reviews' className="bg-gradient-to-b from-black via-gray-900 to-black p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-blue-400 my-8">What Our Tech Creators Say</h2>
            <p className="text-center text-white mb-8">
                Empowering innovation through incentivized solutions. IncentiX is your gateway to rewarding creativity and fostering growth within communities and projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;

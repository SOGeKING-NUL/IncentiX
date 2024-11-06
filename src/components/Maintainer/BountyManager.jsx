// BountyManager.jsx
/*import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const BountyManager = ({ selectedIssue }) => {
  const [bountyAmount, setBountyAmount] = useState('');

  const handleAssignBounty = async () => {
    try {
      await axios.post('/api/bounties', {
        issueId: selectedIssue.id,
        bountyAmount,
        status: 'Assigned',
      });
      toast.success('Bounty assigned successfully!');
    } catch (error) {
      console.error('Error assigning bounty:', error);
      toast.error('Failed to assign bounty.');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Manage Bounty for #{selectedIssue.number}</h2>
      <p className="text-gray-700 mb-2">{selectedIssue.title}</p>
      <input
        type="number"
        value={bountyAmount}
        onChange={(e) => setBountyAmount(e.target.value)}
        placeholder="Enter bounty amount (USD)"
        className="w-full p-2 mb-4 border border-emerald-300 rounded"
      />
      <button
        onClick={handleAssignBounty}
        className="w-full bg-emerald-800 text-white p-3 rounded hover:bg-emerald-700 transition duration-200"
      >
        Assign Bounty
      </button>
    </div>
  );
};

export default BountyManager;*/

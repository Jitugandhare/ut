import React from 'react';

const CommunityFeedback = () => {
  const negative = 12;
  const neutral = 34;
  const positive = 134;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Community feedback</h2>
      <p className="text-base text-gray-700 mb-4">Mostly positive</p>
      <div className="flex items-center mb-4">
        <div className="flex-1 h-2 bg-red-300 rounded-full mr-1" style={{ width: `${(negative / (negative + neutral + positive)) * 100}%` }}></div>
        <div className="flex-1 h-2 bg-yellow-300 rounded-full mr-1" style={{ width: `${(neutral / (negative + neutral + positive)) * 100}%` }}></div>
        <div className="flex-1 h-2 bg-green-300 rounded-full" style={{ width: `${(positive / (negative + neutral + positive)) * 100}%` }}></div>
      </div>
      <div className="flex justify-between text-sm">
        <div className="text-center">
          <p className="text-red-500">Negative</p>
          <p>{negative}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-700">Neutral</p>
          <p>{neutral}</p>
        </div>
        <div className="text-center">
          <p className="text-green-500">Positive</p>
          <p>{positive}</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeedback;

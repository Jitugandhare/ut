import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PerformanceScoreCard = () => {
  const score = 78; 
  const maxScore = 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full ">
      <div className="mb-6 ">
        <CircularProgressbar
         className='h-[40%]'
          value={score}
          maxValue={maxScore}
          text={`${score}`}
          styles={buildStyles({
            pathColor: `#3b82f6`,
            textColor: '#3b82f6',
            trailColor: '#e5e7eb',
            backgroundColor: '#f3f4f6',
          })}
        />
        <p className="text-center mt-2 text-gray-600">of {maxScore} points</p>
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">You're good!</h2>
        <p className="text-gray-500">Your sales performance score is better than 80% other users</p>
        <button className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none">
          Improve your score
        </button>
      </div>
    </div>
  );
};

export default PerformanceScoreCard;

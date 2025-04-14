import React from 'react';

const ProgressOverview = () => {
  // Mock data or fetch from backend
  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="font-bold text-lg mb-2">Progress Overview</h3>
      <p>Total Quizzes Taken: 5</p>
      <p>Average Score: 80%</p>
      <p>Last Topic: Loops</p>
    </div>
  );
};

export default ProgressOverview;

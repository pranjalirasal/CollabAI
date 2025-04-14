import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartQuizCard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="font-bold text-lg mb-2">Start New Quiz</h3>
      <p>Ready to assess your knowledge?</p>
      <button
        onClick={() => navigate('/quiz-details')}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartQuizCard;

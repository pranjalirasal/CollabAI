import React from 'react';
import StartQuizCard from './StartQuizCard';
import ProgressOverview from './ProgressOverview';
import LearningPathCard from './LearningPathCard';
import QuizHistory from './QuizHistory';
import UserGreeting from './UserGreeting';

const Dashboard = () => {
  return (
    <div className="p-6">
      <UserGreeting />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <StartQuizCard />
        <ProgressOverview />
        <LearningPathCard />
        <QuizHistory />
      </div>
    </div>
  );
};

export default Dashboard;

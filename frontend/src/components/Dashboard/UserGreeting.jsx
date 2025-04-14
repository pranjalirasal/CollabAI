import React from 'react';

const UserGreeting = () => {
  const userName = localStorage.getItem("userName") || "User";

  return (
    <div>
      <h2 className="text-2xl font-semibold">Welcome back, {userName} 👋</h2>
    </div>
  );
};

export default UserGreeting;

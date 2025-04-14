import React, { useEffect, useState } from 'react';

const ProgressOverview = () => {
  const [progress, setProgress] = useState({
    totalQuizzes: 0,
    averageScore: 0,
    lastTopic: ''
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const userId = localStorage.getItem("userId");
        console.log(userId);

        // Make the GET request correctly without using body
        const res = await fetch(`http://localhost:4000/user/get-progress/${userId}`, {
          method: "GET",  // No body in GET request
          headers: { "Content-Type": "application/json" },
          credentials: "include",  // Include cookies if needed
        });

        if (res.ok) {
          const data = await res.json();  // Parse JSON response
          console.log(data);
          setProgress(data);
        } else {
          console.error("Error fetching progress:", res.statusText);
        }
      } catch (err) {
        console.error("Error fetching progress:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  if (loading) return <div className="p-4 bg-white shadow rounded">Loading progress...</div>;

  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="font-bold text-lg mb-2">Progress Overview</h3>
      <p>Total Quizzes Taken: {progress.totalQuizzes}</p>
      <p>Average Score: {progress.averageScore}%</p>
      <p>Last Topic: {progress.lastTopic}</p>
    </div>
  );
};

export default ProgressOverview;

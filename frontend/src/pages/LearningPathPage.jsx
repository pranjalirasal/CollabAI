import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const LearningPathPage = () => {
  const location = useLocation();
  const { topic, subject } = location.state || {};

  const [learningPath, setLearningPath] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("Sending to backend:", { topic, subject });

  useEffect(() => {
    const fetchLearningPath = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/recommendation/get-recommendation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ topic, subject }),
        });

        const data = await response.json();
        console.log("Fetched from backend:", data);
        setLearningPath(data.resources || []);
      } catch (error) {
        console.error("Error fetching learning path:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLearningPath();
  }, [topic, subject]);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <h2 className="text-3xl font-bold mb-6">Your Personalized Learning Path</h2>

      {loading ? (
        <p>Loading...</p>
      ) : Array.isArray(learningPath) && learningPath.length > 0 ? (
        learningPath.map((item, idx) => (
          <div
            key={idx}
            className="border p-4 my-3 w-full max-w-2xl rounded-xl shadow-sm"
          >
            <h2 className="text-xl font-bold mb-2">{item.Topic}</h2>

            <h3 className="font-semibold">Videos:</h3>
            {item.Videos?.map((video, i) => {
              const [title, url] = video.split(" - ");
              return (
                <a
                  key={i}
                  href={url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline block"
                >
                  {title || video}
                </a>
              );
            })}

            <h3 className="font-semibold mt-3">Articles:</h3>
            {item.Articles?.map((article, i) => {
              const [title, url] = article.split(" - ");
              return (
                <a
                  key={i}
                  href={url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline block"
                >
                  {title || article}
                </a>
              );
            })}

            <h3 className="font-semibold mt-3">Exercises:</h3>
            {item.Exercises?.map((exercise, i) => (
              <p key={i}>{exercise}</p>
            ))}
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-lg">No Learning Path Found!</p>
      )}
    </div>
  );
};

import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Onboarding from './pages/Onboarding.jsx';
import QuizPage from './pages/QuizPage.jsx';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header.jsx';
import { LearningPathPage } from './pages/LearningPathPage.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';

function App() {
  const navigate=useNavigate();
  return (
    <div>
      <Header
        onLogout={() => {
          localStorage.removeItem("token");
          navigate('/login');
        }}
      />
      <ToastContainer />
      <Routes>
        <Route path="/"  />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz-details" element={<Onboarding />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/learning-path" element={<LearningPathPage />} />
      </Routes>
    </div>
  )
}

export default App;

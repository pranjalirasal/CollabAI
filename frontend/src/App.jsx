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

import { Route,Routes } from 'react-router-dom';
import io from "socket.io-client"
import './App.css';
import Forms from './components/Forms';
import RoomPage from "./pages/RoomPage";
import { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
const server ="http://localhost:4000";
const connectionOptions={
  "force new connection":true,
  reconnectionAttempts:"Infinity",
  timeout:10000,
  transports:["websocket"],
}
//const socket=io(server,connectionOptions);
const socket = io("http://localhost:4000", {
  transports: ["websocket", "polling"]
});


function App() {
//************************************* */
  const [user ,setUser]=useState(null);
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    socket.on("userIsJoined",(data)=>{
      if(data.success){
        console.log("user Joined");
        setUsers(data.users);
      }

      else{
        console.log("userJoined error");
      }
    });
    socket.on("allUsers",data=>{
      setUsers(data);
    })

},[]);

const uuid=()=>{
  let S4=()=>{
    return(((1 + Math.random()) * 0x10000)| 0).toString(16).substring(1);
  };
  return(S4() + S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};
//********************************************** */

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
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz-details" element={<Onboarding />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/learning-path" element={<LearningPathPage />} />
        <Route path="/" element={<Forms uuid={uuid} socket={socket} setUser={setUser}/>} />
        <Route path="/:roomId" element={<RoomPage user={user} socket={socket} users={users}/>}/>
      </Routes>
    </div>
  )
}

export default App;

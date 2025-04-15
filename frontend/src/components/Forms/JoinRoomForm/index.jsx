import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./index.css";

const JoinRoomForm =({uuid,socket,setUser})=>{
    const [roomId,setRoomId]=useState("");
    const [name ,setName]=useState("");

    const navigate=useNavigate();

    const handleRoomJoin=(e)=>{
        e.preventDefault();
        const roomData={
            name,
            roomId,
            userId:uuid(),
            host:false,
            presenter:false,
        }
        console.log(roomData);
        setUser(roomData);
        navigate(`/${roomId}`);
        socket.emit("userJoined",roomData);
    }

    return(
        <form className="form col-md-12 mt-5">
            <div className="form-group">
                <input type="text" className="form-control my-3 rounded-5 " placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
                <div className="input-group d-flex align-items-center justify-content-center">
                    <input type="text" className="form-control my-2 rounded-5 " placeholder="Enter Room Code" value={roomId} onChange={(e)=>setRoomId(e.target.value)}></input>
                </div>
            <button type="submit" onClick={handleRoomJoin} className="btn-primary btn mt-4 form-control rounded-5 button">Join Room</button>
        </form>
    );
}
export  default JoinRoomForm;
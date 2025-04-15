import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./index.css";

const CreateRoomForm =({uuid ,socket,setUser})=>{
    const [roomId,setRoomId]=useState(uuid());
    const [name,setName]=useState("");

    const navigate=useNavigate();

    const handleCreateRoom=(e)=>{
        e.preventDefault();
        const roomData={
            name,
            roomId,
            userId:uuid(),
            host:true,
            presenter:true,
        }
        console.log(roomData);
        setUser(roomData);
        navigate(`/${roomId}`);
        // console.log(roomId);
        socket.emit("userJoined", roomData);
       // alert(roomData.name+" has joined the room");
    }

    return(
        <form className="form col-md-12 mt-5">
            <div className="form-group ">
                <input type="text" className="form-control my-3  rounded-5 border " placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className="form-group border rounded-5 bg-white ">
                <div className="input-group d-flex align-items-center justify-content-center generate">
                    <input type="text" className="form-control my-2 border-0 rounded-left "value={roomId} placeholder="Generate Room Code" disabled></input>
                
                <div className="input-group-append ">
                    <button className="btn btn-primary btn-sm me-1" type="button" onClick={()=>setRoomId(uuid())}>Generate</button>
                    <button className="btn btn-outline-danger btn-sm me-2" type="button">Copy</button>
                </div>
                </div>
            </div>
            <button type="submit" onClick={handleCreateRoom} className=" btn-primary btn mt-4  rounded-5 form-control button">Generate Room</button>
        </form>
    );
}
export default CreateRoomForm;
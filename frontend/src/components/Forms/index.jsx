import CreateRoomForm from "./CreateRoomFrom";
import JoinRoomForm from "./JoinRoomForm";
import "./index.css";


const Forms=({uuid,socket,setUser})=>{
 return (
    <div className="row h-100 pt-5">
        <div className="create  form-box col-md-4 mx-auto  border border-primary rounded-5 mt-5 d-flex flex-column align-items-center p-5   ">
            <h1 className="text-primary fm-bold">Create Room</h1>
            <CreateRoomForm uuid={uuid} socket={socket} setUser={setUser}/>
        </div>
        <div className="create  form-box col-md-4 mx-auto border border-primary rounded-5 mt-5 d-flex flex-column align-items-center  p-5   ">
            <h1 className="text-primary fm-bold">Join Room</h1>
            <JoinRoomForm uuid={uuid} socket={socket} setUser={setUser}/>
        </div>
    </div>
 );
};

export default Forms;
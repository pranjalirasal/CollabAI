import {useState , useRef} from "react"
import "./index.css";
import Whiteboard from "../../components/Whiteboard";

const RoomPage=({user,socket, users})=>{
    const canvasRef=useRef(null);
    const ctxRef=useRef(null);

    const [tool,setTool]= useState("pencil");
    const [color,setColor]=useState("black");
    const [elements ,setElements]=useState([]);
    const [history,setHistory]=useState([]);
    const [openedUserTab,setOpenedUserTab]= useState(false);

    const handleClearCanvas=()=>{
        const canvas=canvasRef.current;
        const ctx=canvas.getContext("2d");
        ctx.fillRect="white";
        ctxRef.current.clearRect(0,0,canvasRef.current.width*2,canvasRef.current.height*2);
        setElements([]);
    };

    const undo=()=>{
       setHistory((prevHistory)=>[...prevHistory,elements[elements.length-1]]) ;
       setElements(
        (prevElements)=>prevElements.slice(0,prevElements.length-1)
       );
    }
    const redo=()=>{
        setElements((prevElements)=>[...prevElements,history[history.length-1],]);
        setHistory(
            (prevElements)=>prevElements.slice(0,prevElements.length-1)
           )
    }

    return(
        <div className="row">
            <button type="button" onClick={()=>setOpenedUserTab(true)} className="btn btn-dark " style={{display:"block", position:"absolute",top:"5%",left:"5%",height:"40px",width:"100px"}} >Users</button>
            {
                openedUserTab && (
                    <div
                        className=" position-fixed top-0  h-100 text-white bg-dark"
                        style={{width:"250px" ,left:"0%"}} >
                        <button type="button " onClick={()=>setOpenedUserTab(false)} className="btn btn-light btn-block w-100 mt-5 ">Close</button>
                        <div className="w-100 mt-5 pt-5">
                        {   
                            
                            users.map((usr,index)=>( 
                            <p key= {index * 999} className="my-2 text-center w-100"> {usr.name} {user && user.userId === usr.userId && "(You)"} </p>
                            ))   
                            
                        }
                        </div>
                    </div>
                )
            }

            <h1 className="text-center py-3 ">White Board Sharing <span className="text-primary">[User Online: { users.length } ]</span></h1>
            {
               user?.presenter && (
                    <div className="col-md-10 gap-3   px-5 mb-5 d-flex align-items-center justify-content-center ms-1">
                    <div className="d-flex col-md-4 justify-content-betweeen gap-1 mx-auto">
                        <div className="d-flex gap-1 align-item-center px-4">
                            <label htmlFor="pencil">Pencil</label>
                            <input type="radio" name="tool"id="pencil" value="pencil" checked={tool== "pencil"} onChange={(e)=>setTool(e.target.value)}></input>
                        </div>
                        <div className="d-flex gap-1 align-item-center px-4">
                            <label htmlFor="line">Line</label>
                            <input type="radio" name="tool" id="line" value="line" checked={tool== "line"} onChange={(e)=>setTool(e.target.value)}></input>
                        </div>
                        <div className="d-flex gap-1 align-item-center px-4">
                            <label htmlFor="rect">Rectangle</label>
                            <input type="radio" name="tool" id="rect" value="rect" checked={tool== "rect"} onChange={(e)=>setTool(e.target.value)}></input>
                        </div>      
                    </div>
                    <div className="">
                        <div className="d-flex align-items-center">
                            <label htmlFor="color">Select Color:</label>
                            <input type="color" id="color" className="ms-3" value={color} onChange={(e)=>setColor(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="d-flex gap-2 mx-auto">
                        <button className="btn btn-primary" disabled={elements.length===0} onClick={()=>undo()}>Undo</button>
                        <button className="btn btn-outline-primary" disabled={history.length<1} onClick={()=>redo()}>Redo</button>
                    </div>
                    <div>
                        <button className="btn btn-danger" onClick={handleClearCanvas}> Clear Board</button>
                    </div>
                </div>  
                )
            }
            
            <div className="col-md-10  mx-auto canvas-box ">
                <Whiteboard canvasRef={canvasRef} 
                ctxRef={ctxRef}  
                elements={elements} 
                setElements={setElements} 
                tool={tool}
                color={color}
                user={user}
                socket={socket}
                />   
            </div>
        </div>
    );
}
export default RoomPage
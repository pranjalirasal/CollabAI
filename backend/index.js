import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import authRouter from './routes/authRoute.js';
import connectDB from './config/db.js';
import quizRoute from './routes/quizRoute.js';
import recommendationsRoute from './routes/recommendationRoute.js';
import progressRoute from './routes/progressRoute.js';
//********************************************** */
const server=require("http").createServer(app);
const {Server} =require("socket.io");
const {addUser}=require("./utils/users");

const io = require("socket.io")(server, {
  cors: {
    origin: "https://your-frontend-domain.com",
    methods: ["GET", "POST"]
  }
});

let roomIdGlobal,imgURLGlobal;

io.on("connection",(socket)=>{
    console.log("User connected");
    //alert(" user has joined the room");
    socket.on("userJoined",(data)=>{
        
        const{name,userId,roomId,host,presenter}=data;
        roomIdGlobal=roomId;
        socket.join(roomId);
        const users=addUser(data);
        socket.emit("userIsJoined",{success:true, users});
        socket.broadcast.to(roomId).emit("allUsers",users);
        socket.broadcast.to(roomId).emit("whiteBoardDataResponse",{
            imgURL : imgURLGlobal,
        })
    });
    socket.on("whiteboardData",(data)=>{
        imgURLGlobal=data;
        socket.broadcast.to(roomIdGlobal).emit("whiteBoardDataResponse",{
            imgURL:data,
        });

    });
});

//************************************************ */
const app = express();
const port = process.env.PORT || 4000;
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));  //to connect backend with frontend
//middleware and all the request will pass using json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("API working!")
})
app.use('/api/auth', authRouter);
app.use('/api/quiz', quizRoute);
app.use('/api/recommendation', recommendationsRoute)
app.use('/user', progressRoute);
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is started on PORT- ${port}`);
        })
    })
    .catch((err) => {
        console.error("Database connection failed!", err)
        process.exit(1);
    })

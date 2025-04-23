import express, {Request, Response} from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import multer from 'multer'
import path from 'path';
import fs from 'fs';

require('dotenv').config();

import adminauth from './user/routes/auth'
import shop from './user/routes/shop'

import {authenticateToken} from './user/middlewares/authenticateToken';

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        // console.log("destination", file);

        const absolutePath = path.resolve(__dirname, 'uploads');
        if (!fs.existsSync(absolutePath)) {
          fs.mkdirSync(absolutePath, { recursive: true });
        }
        callback(null, absolutePath);
        // callback(null, "uploads");
    },
    filename: (req, file, callback) => {
        // console.log("file", file);
        
      callback(null, Date.now() + '-' + file.originalname);
    },
  });

const upload = multer({ storage: storage });

const app = express();
// Enable CORS with specific origin
app.use(cors());

// Handle preflight requests for all routes
app.options('*', cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(compression())
app.use(cookieParser())

const port = process.env.SEVERPORT || 8080

app.use("/js", express.static(path.join(__dirname, 'dist', 'assets', 'index-TSNK7VKS.js')));
app.use(express.static(path.join(__dirname, 'dist')));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use("/user", adminauth);
app.use("/user", upload.single('logo'), authenticateToken, shop);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const serverInstance = app.listen(port, ()=>{
  console.log("Listening to port: ", port);
});
export const server = () =>{
  return serverInstance;
};
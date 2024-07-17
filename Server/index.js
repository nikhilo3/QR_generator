import express from "express";
import Qrrouter from "./Router/qrRoute.js";
import cors from 'cors';
import QRCode from 'qrcode';

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/',(req,res)=>{
    res.send({success:true,message:"QR code server is running"})
})

app.use('/api/qr',Qrrouter);


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})
import express from "express";
import { getQr } from "../Controller/qrCtrl.js";

const Qrrouter = express.Router();

Qrrouter.post('/generateqr',getQr);

export default Qrrouter;
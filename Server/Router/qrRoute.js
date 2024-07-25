import express from "express";
import { getQr } from "../Controller/qrCtrl.js";
import { downloadQr } from "../Controller/downloadQrCtrl.js";

const Qrrouter = express.Router();

Qrrouter.post('/generateqr',getQr);
Qrrouter.post('/downloadqr',downloadQr);

export default Qrrouter;
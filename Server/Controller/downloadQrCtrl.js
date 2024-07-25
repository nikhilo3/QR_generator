// import QRCode from 'qrcode';
// import { writeFile, unlink } from 'fs';
// import { join ,dirname } from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


// const downloadQr = async (req, res) => {
//     console.log("download wr called");
//     const { inputURL } = req.body;

//     let opt = {
//         errorCorrectionLevel: 'H',
//         type: 'image/jpeg',
//         quality: 1,
//         margin: 1,
//         width: 250,
//         color: {
//             dark: "#FFFFFF",
//             light: "#0A0A0A"
//         }
//     };

//     QRCode.toBuffer(inputURL, opt, (err, buffer) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).json({ error: 'Failed to generate QR code' });
//         }

//         const filePath = join(__dirname, 'qr-code.jpg');
//         writeFile(filePath, buffer, (err) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).json({ error: 'Failed to save QR code' });
//             }

//             res.download(filePath, 'qr-code.jpg', (err) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 // Optionally delete the file after download
//                 unlink(filePath, (err) => {
//                     if (err) console.log(err);
//                 });
//             });
//         });
//     });
// };

// export {downloadQr}
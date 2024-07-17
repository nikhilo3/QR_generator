import QRCode from 'qrcode';

const getQr = async (req, res) => {
    const { inputURL } = req.body;

    let opt = {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        quality: 1,
        margin: 1,
        width:250,
        color: {
            dark: "#FFFFFF",
            light: "#0A0A0A"
        }
    }

    QRCode.toDataURL(inputURL, opt, (err, url) => {
        if (err) {
            console.log(err);
        }
        res.json({ url });
    });
}

export { getQr }
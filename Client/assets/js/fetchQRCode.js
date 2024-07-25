const fetchQR = async () => {
    try {
        const inputURL = document.querySelector('input[name="url"]').value;
        const response = await fetch('https://qr-generator-api.vercel.app/api/qr/generateqr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inputURL })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Fetch QR failed:', error);
    } finally {
        const loaderimg = document.querySelector('.loaderimg');
        loaderimg.style.display = 'block';
    }



}


const handleSubmit = async (e) => {
    e.preventDefault();
    const inputURL = document.querySelector('input[name="url"]');
    const loaderimg = document.querySelector('.loaderimg');
    const imagesrc = document.querySelector('.qrimg');
    const downloadQRButton = document.querySelector('.btndownload');
    try {
        if (inputURL.value.length <= 0) {
            inputURL.classList.add('error');
            // const imagesrc = document.querySelector('.qrimg')
            imagesrc.src = "";
            setTimeout(() => {
                inputURL.classList.remove('error')
            }, 1000)
            loaderimg.style.display = 'none';
            downloadQRButton.classList.add('hidden');
        } else {
            loaderimg.style.display = 'block'; // Show loader
            const imagesrc = document.querySelector('.qrimg')
            const data = await fetchQR();
            imagesrc.src = data.url;
            loaderimg.style.display = 'none';
            downloadQRButton.classList.remove('hidden'); // Show download button
        }
    } catch (error) {
        console.error('Handle submit failed:', error);
        loaderimg.style.display = 'block';
        downloadQRButton.classList.add('hidden'); // Hide download button
    }
    // loaderimg.style.display = 'none'; // Hide loader
}


document.addEventListener('DOMContentLoaded', () => {
    const inputURL = document.querySelector('input[name="url"]');
    const downloadQRButton = document.querySelector('.btndownload');

    // Event listener for input changes
    inputURL.addEventListener('input', () => {
        downloadQRButton.classList.add('hidden'); // Hide download button on input change
    });
});


const downloadQR = async () => {
    try {
        const qrCodeUrl = document.querySelector('.qrimg').src;


        if (qrCodeUrl) {
            // Create a link element to trigger the download
            const link = document.createElement('a');
            link.href = qrCodeUrl;
            link.download = 'qr-code.jpg'; // Set the default file name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

    } catch (error) {
        console.error('Fetch QR failed:', error);
    }
}
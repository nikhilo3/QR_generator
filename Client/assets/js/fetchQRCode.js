const fetchQR = async () => {
    try {
        const inputURL = document.querySelector('input[name="url"]').value;
        const response = await fetch('qr-generator-api.vercel.app/api/qr/generateqr', {
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
        loaderimg.style.display = 'none';
    }



}


const handleSubmit = async (e) => {
    e.preventDefault();
    const inputURL = document.querySelector('input[name="url"]');
    const loaderimg = document.querySelector('.loaderimg');
    try {
        if (inputURL.value.length <= 0) {
            inputURL.classList.add('error');
            const imagesrc = document.querySelector('.qrimg')
            imagesrc.src = "";
            setTimeout(() => {
                inputURL.classList.remove('error')
            }, 1000)
        } else {
            loaderimg.style.display = 'block'; // Show loader
            const imagesrc = document.querySelector('.qrimg')
            const data = await fetchQR();
            imagesrc.src = data.url;
        }
    } catch (error) {
        console.error('Handle submit failed:', error);
    }
    loaderimg.style.display = 'none'; // Hide loader
}
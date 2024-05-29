
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let time = 0;
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    function animate() {
        time += 0.01;
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;
        for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
                const i = (y * canvas.width + x) * 4;
                const r = Math.sin(x * 0.01 + time) * 127 + 128;
                const g = Math.sin(y * 0.01 + time) * 127 + 128;
                const b = Math.sin(x * 0.01 + y * 0.01 + time) * 127 + 128;
                data[i] = r;
                data[i + 1] = g;
                data[i + 2] = b;
                data[i + 3] = 255;
            }
        }
        ctx.putImageData(imageData, 0, 0);
        requestAnimationFrame(animate);
    }
    resize();
    animate();
    window.onresize = resize;
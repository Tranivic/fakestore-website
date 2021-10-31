function contagem(obj, inicio, fim, duration) {

    let inicioTimestamp = null;
    const step = (timestamp) => {
        if (!inicioTimestamp) inicioTimestamp = timestamp;
        const progress = Math.min((timestamp - inicioTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (fim - inicio) + inicio);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);

}

function contador() {
    const rect1 = document.getElementById("rect1");
    contagem(rect1, 0, 6258, 10000);
    const rect2 = document.getElementById("rect2");
    contagem(rect2, 0, 8547, 10000);
    const rect3 = document.getElementById("rect3");
    contagem(rect3, 0, 9258, 10000);
    const rect4 = document.getElementById("rect4");
    contagem(rect4, 0, 10587, 10000);
}
contador()
window.onload = function () {
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext("2d");

    function f(x) {
        return x**x
    }

    let startX = -10;
    let endX = 10;
    let stepX = 0.1;

    let minY = f(startX);
    let maxY = f(startX);

    for(let x = startX + stepX; x <= endX; x+= stepX){
        let y = f(x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
    }

  
    let scaleX = canvas.width / (endX - startX);
    let scaleY = canvas.height / (maxY - minY);

    c.beginPath();
    c.moveTo(startX * scaleX, canvas.height - f(startX) * scaleY);
    for (let x = startX + stepX; x <= endX; x += stepX) {
        let y = f(x);
        let plotX = (x - startX) * scaleX;
        let plotY = canvas.height - y * scaleY;
        c.lineTo(plotX, plotY);
    }
    c.stroke();
}


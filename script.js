window.onload = function () {
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext("2d");
    let input = document.querySelector('#input');
    let draw = document.querySelector('#draw');
    function f(x) {
        return x**3 + 12 * x + 19; 
    }
   
    let startX = -10;
    let endX = 10;
    let stepX = 0.1;

    let minY = f(startX);
    let maxY = f(startX);

    for (let x = startX + stepX; x <= endX; x += stepX) {
        let y = f(x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
    }

    let scaleX = canvas.width / (endX - startX);
    let scaleY = canvas.height / (maxY - minY);

    let middleY = canvas.height / 2;



    c.beginPath();
    for (let x = startX; x <= endX; x += stepX) {
        let y = f(x);
        let plotX = (x - startX) * scaleX;
        let plotY = middleY - y * scaleY;
        c.lineTo(plotX, plotY);
    }
    c.strokeStyle = "blue";
    c.stroke();

    c.beginPath();
    c.moveTo(0, middleY);
    c.lineTo(canvas.width, middleY);
    c.strokeStyle = "black";
    c.stroke();


    c.beginPath();
    c.moveTo(canvas.width / 2, 0);
    c.lineTo(canvas.width / 2, canvas.height);
    c.strokeStyle = "black";
    c.stroke();
}
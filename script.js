
function f(x) {
    return x**2 - 3;
} 

function main() {
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext("2d");

    let startX = -10;
    let endX = 10;
    let stepX = 0.1;

    drawGraph(c, startX, endX, stepX, canvas.width, canvas.height);
    drawAxes(c, canvas);
}

function drawGraph(c, startX, endX, stepX, canvasWidth, canvasHeight) {
    let pixelStepX = canvasWidth / (endX - startX);
    let pixelStepY = canvasHeight / 20;
    
    let centerY = canvasHeight / 2;
    c.beginPath();
    for (let x = startX; x <= endX; x += stepX) {
        let plotX = (x - startX) * pixelStepX; 
        let plotY = centerY - f(x) * pixelStepY;
        if (x === startX) {
            c.moveTo(plotX, plotY);
        } else {
            c.lineTo(plotX, plotY);
        }
    }
    c.strokeStyle = "blue";
    c.stroke();
}

function drawAxes(c, canvas) {
    const tickLength = 5;
    const tickInterval = 1;
    const labelPadding = 5;

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    c.beginPath();
    c.moveTo(0, centerY);
    c.lineTo(canvas.width, centerY);
    c.strokeStyle = "black";
    c.stroke();

    for (let x = -10; x <= 10; x += tickInterval) {
        let plotX;
        if (x < 0) {
            plotX = (x + 10) * (canvas.width / 20);
        } else if (x === 0) {
            plotX = centerX;
        } else {
            plotX = (x + 10) * (canvas.width / 20);
        }

        c.beginPath();
        c.moveTo(plotX, centerY - tickLength / 2);
        c.lineTo(plotX, centerY + tickLength / 2);
        c.strokeStyle = "black";
        c.stroke();

        c.font = "10px Arial";
        c.fillStyle = "black";
        c.textAlign = "center";
        c.fillText(x, plotX, centerY + labelPadding);
    }

    c.beginPath();
    c.moveTo(centerX, 0);
    c.lineTo(centerX, canvas.height);
    c.strokeStyle = "black";
    c.stroke();

    for (let y = -10; y <= 10; y += tickInterval) {
        let plotY = (10 - y) * (canvas.height / 20) - centerY;
        c.beginPath();
        c.moveTo(centerX - tickLength / 2, plotY + centerY);
        c.lineTo(centerX + tickLength / 2, plotY + centerY);
        c.strokeStyle = "black";
        c.stroke();

        c.font = "10px Arial";
        c.fillStyle = "black";
        c.textAlign = "right";
        c.fillText(y, centerX - labelPadding, plotY + centerY + labelPadding);
    }
}
main();

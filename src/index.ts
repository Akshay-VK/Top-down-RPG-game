const CANVAS: HTMLCanvasElement = document.querySelector('canvas');

const CTX = CANVAS.getContext('2d');

const WIDTH: number = 600;
const HEIGHT: number = 400;

CTX.canvas.width = WIDTH;
CTX.canvas.height = HEIGHT;

function run(){


    CTX.fillStyle = 'black';
    CTX.fillRect(0,0,WIDTH,HEIGHT);

    requestAnimationFrame(run);
}

requestAnimationFrame(run);
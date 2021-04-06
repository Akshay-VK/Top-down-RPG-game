import { Player } from './Player/Player';
import { Handler } from './handler';
import { KeyInput } from './KeyInput';
import { objectType } from './types';
import { Tile } from './Tiles/Tile';


const CANVAS: HTMLCanvasElement = document.querySelector('canvas');

const CTX = CANVAS.getContext('2d');

const WIDTH: number = 600;
const HEIGHT: number = 400;

CTX.canvas.width = WIDTH;
CTX.canvas.height = HEIGHT;


//vars



//MAIN CODE
var handler : Handler = new Handler();
var keyInputs: KeyInput = new KeyInput(handler);



handler.objects.push(new Tile(20,20,50,50));
handler.objects.push(new Player(20,20,50,50,objectType.Player));


function run(){


    CTX.fillStyle = 'black';
    CTX.fillRect(0,0,WIDTH,HEIGHT);



    handler.tick();
    keyInputs.tick();

    handler.render(CTX);

    requestAnimationFrame(run);
}

function handle(e: KeyboardEvent){
    keyInputs.tickAct(e,handler);
}

document.addEventListener('keypress',handle);
requestAnimationFrame(run);
//import { Player } from './Player/Player';
import { Handler } from './Game/handler';
import { KeyInput } from './Game/KeyInput';
import { objectType } from './Game/types';
//import { Tile } from './Tiles/Tile';
import { Camera } from './Game/Camera';
import { TerrainGenerator } from './Generate/terrainGenerator';
import { Player } from './Player/Player';
import { TreeGenerator } from './Generate/treeGenerator';


const CANVAS: HTMLCanvasElement = document.querySelector('canvas');

const CTX = CANVAS.getContext('2d');

const WIDTH: number = 800;
const HEIGHT: number = 600;

CTX.canvas.width = WIDTH;
CTX.canvas.height = HEIGHT;

const PLAYING: boolean = true;


const up: HTMLElement = document.getElementById('up');
const left: HTMLElement = document.getElementById('left');
const right: HTMLElement = document.getElementById('right');
const down: HTMLElement = document.getElementById('down');


//vars

var grass: string = 'green';
var water: string = 'blue';

//MAIN CODE
var handler : Handler = new Handler();
var keyInputs: KeyInput = new KeyInput(handler);
var camera : Camera = new Camera(0,0,WIDTH,HEIGHT);

//var Player: Player = new Player(0,0,50,50,objectType.Player);

handler.objects.push(new Player(0,0,50,50,objectType.Player));

var generator: TerrainGenerator = new TerrainGenerator();
var treeGenerator : TreeGenerator = new TreeGenerator(generator);

// handler.objects.push(new Tile(0,0,50,50,grass,));
// handler.objects.push(new Tile(50,50,50,50,grass));
// handler.objects.push(new Tile(50,0,50,50,water));
// handler.objects.push(new Tile(0,50,50,50,grass));



function run(){

    if(PLAYING){
            

        CTX.fillStyle = 'black';
        CTX.fillRect(0,0,WIDTH,HEIGHT);



        handler.tick();
        keyInputs.tick();
        camera.tick(handler);
      
        generator.generateTerrain(camera, handler);
        treeGenerator.generateTrees(camera,handler);
        //generator.emptyTerrain(handler);

        
        handler.render(CTX,camera);
        handler.renderPlayer(CTX,camera);


        handler.standingOn(handler);

        console.log(handler.objects.length);

        generator.emptyTerrain(handler);
        treeGenerator.emptyTrees(handler);
        
        requestAnimationFrame(run);
    }
}

function handle(e: KeyboardEvent){
    keyInputs.tickAct(e,handler);
}

up.addEventListener('click', (e) => {
    handler.movePlayerUp();
});

left.addEventListener('click', (e) => {
    handler.movePlayerLeft();
});

right.addEventListener('click', (e) => {
    handler.movePlayerRight();
});

down.addEventListener('click', (e) => {
    handler.movePlayerDown();
});



document.addEventListener('keypress',handle);
requestAnimationFrame(run);
import {
    Vector
} from '../Vector';
import {
    GameObject
} from '../GameObject';
import {
    KeyInput
} from '../KeyInput';

class Player extends GameObject{   
    
    keyInput: KeyInput;

    constructor(x: number, y: number, width: number, height: number) {
        super(x,y,width,height);
        this.keyInput = new KeyInput();
    }

/*
W = 22
A = 0
S = 18
D = 3
*/
    
    public tick(){

    }

    public render(ctx: CanvasRenderingContext2D){

    }
}
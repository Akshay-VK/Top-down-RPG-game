import {
    Vector
} from '../Vector';
import {
    GameObject
} from '../GameObject';
import { objectType } from '../types';

export class Player extends GameObject{   
    
    direction: Vector;
    //objType: objectType = objectType.Player;

    constructor(x: number, y: number, width: number, height: number, objecttype: objectType) {
        super(x,y,width,height,objecttype);
        this.direction = new Vector(0,0);
    }

/*
W = 22
A = 0
S = 18
D = 3
*/

    public setDirection(newDir: Vector){
        this.direction.x = newDir.x;
        this.direction.y = newDir.y;
    }
    
    public tick(){
        
        this.position.x += this.direction.x;
        this.position.y += this.direction.y;
                        
    }

    public render(ctx: CanvasRenderingContext2D){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.position.x,this.position.y,this.size.x,this.size.y);
    }
}
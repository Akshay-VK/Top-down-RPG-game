import {
    Vector
} from '../Vector';
import {
    GameObject
} from '../GameObject';
import { objectType } from '../Game/types';
import { Camera } from '../Game/Camera';

export class Player extends GameObject{   
    
    direction: Vector;
    //objType: objectType = objectType.Player;

    constructor(x: number, y: number, width: number, height: number, objecttype: objectType) {
        super(x,y,width,height,objecttype, 'white');
        this.direction = new Vector(0,0);
    }

/*
W = 22
A = 0
S = 18
D = 3
*/

    public keyboardTick(e: KeyboardEvent){        
        var asciiCode = (e.key) ? e.key : e.code;

        switch (asciiCode) {
            case 'w':
                this.setPosition(new Vector(this.position.x                ,this.position.y  -  this.size.y));
                break;
            case 'a':
                this.setPosition(new Vector(this.position.x  -  this.size.x,this.position.y));
                break;
            case 's':
                this.setPosition(new Vector(this.position.x                ,this.position.y  +  this.size.y));
                break;
            case 'd':
                this.setPosition(new Vector(this.position.x  +  this.size.x,this.position.y));
                break;
        
        }
    }

    public setDirection(newDir: Vector){
        this.direction.x = newDir.x;
        this.direction.y = newDir.y;
    }
    
    public tick(){
        
        this.position.x += this.direction.x;
        this.position.y += this.direction.y;
                        
    }

    public render(ctx: CanvasRenderingContext2D, cam: Camera){
        ctx.fillStyle = 'white';

        ctx.fillRect((this.position.x+10)-cam.getPosition().x,(this.position.y+10)-cam.getPosition().y,this.size.x-20,this.size.y-20);
    }
}
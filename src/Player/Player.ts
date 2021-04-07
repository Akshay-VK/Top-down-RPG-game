import {
    Vector
} from '../Vector';
import {
    GameObject
} from '../GameObject';
import { objectType } from '../Game/types';
import { Camera } from '../Game/Camera';
import { Handler } from '../Game/handler';

export class Player extends GameObject{   
    
    direction: Vector;
    color: string;

    constructor(x: number, y: number, width: number, height: number, objecttype: objectType) {
        super(x,y,width,height,objecttype, 'white');
        this.direction = new Vector(0,0);
        this.color = 'white';
    }

/*
W = 22
A = 0
S = 18
D = 3
*/
    public moveUp(){
        this.setPosition(new Vector(this.position.x                ,this.position.y  -  this.size.y));
    }

    public moveLeft(){
        this.setPosition(new Vector(this.position.x  -  this.size.x,this.position.y));
    }

    public moveDown(){
        this.setPosition(new Vector(this.position.x                ,this.position.y  +  this.size.y));
    }

    public moveRight(){
        this.setPosition(new Vector(this.position.x  +  this.size.x,this.position.y));
    }

    public keyboardTick(e: KeyboardEvent){        
        var asciiCode = (e.key) ? e.key : e.code;

        switch (asciiCode) {
            case 'w':
                this.moveUp();
                break;
            case 'a':
                this.moveLeft();
                break;
            case 's':
                this.moveDown();
                break;
            case 'd':
                this.moveRight();
                break;
        
        }
    }

    public setDirection(newDir: Vector){
        this.direction.x = newDir.x;
        this.direction.y = newDir.y;
    }

    public standingOn(handler: Handler){
        //console.log(handler.standingOnBlock());
        if(handler.standingOnBlock() != objectType.None){
            //console.log(handler.standingOnBlock());
            if(handler.standingOnBlock() == 'blue'){
                this.color = 'rgb(173, 190, 255)';
            }else{
                this.color = 'white';
            }
        }else{
            console.log('standing on void');
        }
    }
    
    public tick(){
        
        this.position.x += this.direction.x;
        this.position.y += this.direction.y;
                        

        // standing on

    }

    public render(ctx: CanvasRenderingContext2D, cam: Camera){
        ctx.fillStyle = 'white';

        ctx.fillRect((this.position.x+10)-cam.getPosition().x,(this.position.y+10)-cam.getPosition().y,this.size.x-20,this.size.y-20);
        
        ctx.fillStyle = this.color;
        ctx.fillRect((this.position.x+20)-cam.getPosition().x,(this.position.y+20)-cam.getPosition().y,this.size.x-40,this.size.y-40);
    }
}
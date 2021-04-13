import { Camera } from "../Game/Camera";
import { objectType } from "../Game/types";
import { GameObject } from "../GameObject";

export class Tree extends GameObject{
    constructor(x:number, y: number, width: number, height: number){
        super(x,y,width,height,objectType.Tile,'multi');
    }
    public render(ctx: CanvasRenderingContext2D, cam: Camera){
        // check if tile in view
        if(this.position.x > cam.getPosition().x-50 &&
        this.position.x < cam.getPosition().x+cam.getSize().x &&
        this.position.y > cam.getPosition().y -50 && 
        this.position.y < cam.getPosition().y+cam.getSize().y){
            //code
            ctx.fillStyle = 'black';
            ctx.fillRect(this.position.x - cam.getPosition().x + 10,this.position.y - cam.getPosition().y +10,this.size.x - 20 ,this.size.y - 20);
        }
    }
}
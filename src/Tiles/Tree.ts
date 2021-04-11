import { Camera } from "../Game/Camera";
import { objectType } from "../Game/types";
import { GameObject } from "../GameObject";

export class Tree extends GameObject{
    constructor(x: number,y:number, width: number, height: number){
        super(x,y,width,height,objectType.Tile,'multi');
    }

    public render(ctx: CanvasRenderingContext2D, cam: Camera){
        ctx.fillStyle = 'brown';
        ctx.fillRect(this.position.x+10-cam.getPosition().x,this.position.y-cam.getPosition().y,this.size.x-2,this.size.y-2);
    }
}
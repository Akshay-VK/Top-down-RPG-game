import { GameObject } from "../GameObject";
import { objectType } from "../Game/types";
import { Camera } from "../Game/Camera";

export class Tile extends GameObject{

    constructor(x: number, y: number, width: number, height: number, color: string){
        
        super(x,y,width,height,objectType.Tile, color);

        

        this.objecttype = objectType.Tile;

    }

    public tick(){

    }

    public render(ctx: CanvasRenderingContext2D, cam: Camera){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x - cam.getPosition().x,this.position.y - cam.getPosition().y,this.size.x,this.size.y);
    }

}
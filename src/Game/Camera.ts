import { GameObject } from "../GameObject";
import { Vector } from "../Vector";
import { Handler } from "./handler";
import { objectType } from "./types";

export class Camera extends GameObject{
    constructor(x: number, y: number, width: number, height: number) {
        super(x,y,width,height,objectType.Camera, 'black');

    }

    public tick(handler: Handler){
        this.setPosition(new Vector(handler.getPlayerPos().x,handler.getPlayerPos().y));
        this.setPosition(new Vector(this.position.x - (this.size.x/2),this.position.y - (this.size.y/2)));
    }

}
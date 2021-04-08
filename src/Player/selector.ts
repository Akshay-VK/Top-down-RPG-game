import { Camera } from "../Game/Camera";
import { Vector } from "../Vector";

export class Selector{
    holdingTile: Vector;
    constructor(pos: Vector){
        this.holdingTile = pos;
    }

    updateHoldingTile(pos: Vector){
        this.holdingTile = pos;
    }

    render(ctx: CanvasRenderingContext2D, cam: Camera){
        ctx.strokeStyle = 'black';

        ctx.strokeRect(
            this.holdingTile.x   -cam.getPosition().x,
            this.holdingTile.y   -cam.getPosition().y,
            50,
            50);
    }
}
import { Vector } from './Vector';

export class GameObject{
    
    protected position: Vector;
    protected size: Vector;

    public constructor(x: number, y:number, width: number, height: number){
        this.position = new Vector(x,y);
        this.size = new Vector(width,height);
    }

    public tick(){

    }

    public render(ctx: CanvasRenderingContext2D){

    }

    public getPosition(): Vector{
        return this.position;
    }

    public getSize(): Vector{
        return this.size;
    }

    public setPosition(pos: Vector){
        this.position.x = pos.x;
        this.position.y = pos.y;
    }

    public setSize(size: Vector){
        this.size.x = size.x;
        this.size.y = size.y;
    }
}
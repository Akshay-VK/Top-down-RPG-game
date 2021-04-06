import { GameObject } from '../GameObject';
import { Vector } from '../Vector';
import { Camera } from './Camera';
import { objectType } from './types';

export class Handler{
    objects: Array<GameObject>;
    constructor(){
        this.objects = new Array<GameObject>();
    }

    public tick(){
        for(let i: number = 0; i < this.objects.length;i++){
            this.objects[i].tick();
        }
    }

    public render(ctx: CanvasRenderingContext2D, cam: Camera){
        for(let i: number = 0; i < this.objects.length;i++){
            this.objects[i].render(ctx, cam);
        }
    }

    public getPlayerPos(): Vector{
        for(let i: number = 0; i < this.objects.length;i++){
            if(this.objects[i].getObjectType() == objectType.Player){
                return this.objects[i].getPosition();
            }
        }
    }
}
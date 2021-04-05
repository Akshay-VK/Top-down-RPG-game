import { GameObject } from './GameObject';

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

    public render(ctx: CanvasRenderingContext2D){
        for(let i: number = 0; i < this.objects.length;i++){
            this.objects[i].render(ctx);
        }
    }
}
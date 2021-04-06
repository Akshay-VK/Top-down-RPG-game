import { GameObject } from "./GameObject";
import { Handler } from "./handler";
import { objectType } from "./types";
import { Vector } from "./Vector";

export class KeyInput{

    handler: Handler;
    
    
    constructor(handler: Handler){
        this.handler = handler;
    }

    tick(){

    }

    tickAct(e: KeyboardEvent,handler: Handler){
        var asciiCode = (e.key) ? e.key : e.code;
        

        for(let i = 0;i < handler.objects.length;i++){
            if(handler.objects[i].getObjectType() == objectType.Player){
                handler.objects[i].keyboardTick(e);
                
            }
        }
    }

}
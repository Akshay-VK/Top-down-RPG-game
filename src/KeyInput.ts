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
                var tempObj: GameObject = handler.objects[i];
                var tempObjPos: Vector = tempObj.getPosition();
                var tempObjSize: Vector = tempObj.getSize();
                switch(asciiCode){
                    case 'w':
                        handler.objects[i].setPosition(new Vector(tempObjPos.x              ,tempObjPos.y-tempObjSize.y));
                        break;
                    case 'a':
                        handler.objects[i].setPosition(new Vector(tempObjPos.x-tempObjSize.x,tempObjPos.y));
                        break;
                    case 's':
                        handler.objects[i].setPosition(new Vector(tempObjPos.x              ,tempObjPos.y+tempObjSize.y));
                        break;
                    case 'd':
                        handler.objects[i].setPosition(new Vector(tempObjPos.x+tempObjSize.x,tempObjPos.y));
                        break;
                        
                }
            }
        }
    }

}
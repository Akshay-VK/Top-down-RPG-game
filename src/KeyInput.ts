export class KeyInput{

    keys: Array<boolean>; 
    
    
    constructor(){
        this.keys = new Array<boolean>(26);

        for(let i = 0; i < this.keys.length; i++){

            this.keys[i] = false;
        }
    }

    public getKeyStatus(index: number): boolean{

        if(index >= 0 && index <= 25){

            return this.keys[index];
        }else{

            throw Error("Invalid index of key specified");
        }
    }
}
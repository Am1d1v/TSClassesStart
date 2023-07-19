

class Vehicle {
    make: string;
    private damages: string[];
    private _model: string;

    set model(m: string){
        this._model = m;
    }

    get moder(){
        return this._model;
    }

    addDamage(damage: string){
        this.damages.push(damage);
    }
}

new Vehicle().make = 'd';


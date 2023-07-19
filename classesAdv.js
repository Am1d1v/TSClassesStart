"use strict";
// Properties Visibility
/*

class Vehicle {
    make: string;
    private damages: string[];
    private _model: string;
    protected run: number;
    #price: number;

    set model(m: string){
        this._model = m;
        this.#price = 1000;
    }

    get moder(){
        return this._model;
    }

    addDamage(damage: string){
        this.damages.push(damage);
    }
}

new Vehicle().make = 'd';


class EuroTrack extends Vehicle {
    setRun(km: number){
        this.run = km;
    }
}

*/
// Static Properties
class UserService {
    static getUser(id) {
        return UserService.db.findById(id);
    }
    create() {
        UserService.db;
    }
}
(() => {
    UserService.db = 'someDataBase';
})();
UserService.db = 'some';
const newUser = new UserService();
newUser.create();

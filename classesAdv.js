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
/*

class UserService {
    static db: any;

    static getUser(id: number){
        return UserService.db.findById(id);
    }

    create(){
        UserService.db;
    }

    static {
        UserService.db = 'someDataBase';
    }
}

UserService.db = 'some';

const newUser = new UserService();
newUser.create();

*/
// Context 
/*

class Payment {
    private date: Date = new Date();

    getDate(this: Payment){
        return this.date;
    }

    getDateArrow = () => {
        return this.date;
    }
}

const p = new Payment();


const user = {
    id: 1,
    paymentDate: p.getDate.bind(p)
}

console.log(user.paymentDate());

*/
// This Typesation
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
}
class AdminBuiler extends UserBuilder {
}
const res = new UserBuilder().setName('Dima');
const res2 = new AdminBuiler().setName('Dima');
console.log(res);

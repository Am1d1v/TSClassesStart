"use strict";
/*



class User {
    name: string;
    age: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(ageOrName?: string | number, age?: number){
        if(typeof ageOrName ==='string'){
            this.name = ageOrName
        } else if (typeof ageOrName === 'number'){
            this.age = ageOrName
        };

        if(typeof age ==='number'){
            this.age = age
    }
 }
}

const user = new User('Dima');
const user1 = new User();
const user2 = new User(30);
const user3 = new User('Dima', 20);

*/
/*

enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}

class Payment {
    id: number;
    status: PaymentStatus;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded
    }

    getPaymentLifeTime(): number{
        return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPayment(){
        if(this.status == PaymentStatus.Processed){
            throw new Error(' Payment is Processed');
        }
        this.status == PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}

const payment = new Payment(1);
const time = payment.getPaymentLifeTime();
console.log(payment);
console.log(time);

*/
// Getter Setter
class User {
    setLogin(l) {
        this.login = 'user-' + l;
    }
}
const user = new User();

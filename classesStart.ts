

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

/*

class User {
    _login: string;
    password: string;
    createdAt: Date;

    set login(l: string | number){
        this._login = 'user-' + l;
        this.createdAt = new Date();
    }

    get login(){
        return this._login;
    }

    /*
    set password(p: string){

    }
    */

    /*

    async setPassword(p: string){

    }
}

const user = new User();
user.login = 'myLogin';
console.log(user);
console.log(user.login);

*/


// Implements

/*
interface ILogger {
    log(...args: string[]): void;
    error(...args: string[]): void;
}

class Logger implements ILogger{
    log(...args: any[]): void{
        console.log(...args);
    }

    error(...args: string[]): void {
        console.error(...args);
    }
}



interface IPayable {
    pay(paymentId: number): void;
    price?: number;
}

interface IDeletable {
    delete(): void;
}

class User implements IPayable, IDeletable {
    delete(): void {
        
    }

    pay(paymentId: number): void {
        
    }
    
}

*/

// Extends

/*

type PaymentStatus = 'new' | 'paid';

class Payment {
    id: number;
    status: PaymentStatus = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay(){
        this.status = 'paid';
    }
}

class ParsistefPayment extends Payment{
    dataBaseID: number;
    payedAt: Date;

    constructor() {
        const id = Math.random();
        super(id);
    }

    save(){

    }

   override pay(date?: Date){
        super.pay();
        if(date){
            this.payedAt = date;
        }
        
    }
}

//

class User {
    name: string = 'user';

    constructor() {
        console.log(this.name);
    }
}

class Admin extends User {
    name: string = 'admin';

    constructor() {
        super();
        console.log(this.name);
    }
}

new Admin();

*/

// Composition

/*

class User {
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

class Users extends Array<User>{
    searchByName(name: string){
        return this.filter(u => u.name === name);
    }

    override toString(): string {
        return this.map(u => u.name).join(', ');
    }
}

const users = new Users();
users.push(new User('Dima'));
users.push(new User('SomeName'));
console.log(users.toString());

class UsersList{
    users: User[];

    push(u: User){
        this.users.push(u);
    }
}


class Payment{
    date: Date;
}

class UsersWithPayment{
    user: User;
    payment: Payment;

    constructor(user: User, payment: Payment){
        this.user = user;
        this.payment = payment;

    }
}

*/


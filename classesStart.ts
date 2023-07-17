

class User {
    name: string;
    age: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(ageOrName?: string | number){
        if(typeof ageOrName ==='string'){
            this.name = ageOrName
        } else if (typeof ageOrName === 'number'){
            this.age = ageOrName
        };
    }
}

const user = new User('Dima');
const user1 = new User();
const user2 = new User(30);

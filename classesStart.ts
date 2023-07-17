

class User {
    name: string;

    constructor();
    constructor(name: string);
    constructor(name?: string){
        if(typeof name ==='string'){
            this.name = name
        };
    }
}

const user = new User('Dima');
const user1 = new User();

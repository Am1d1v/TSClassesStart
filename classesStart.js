"use strict";
class User {
    constructor(ageOrName, age) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
        ;
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}
const user = new User('Dima');
const user1 = new User();
const user2 = new User(30);
const user3 = new User('Dima', 20);

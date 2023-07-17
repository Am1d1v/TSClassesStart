"use strict";
class User {
    constructor(name) {
        if (typeof name === 'string') {
            this.name = name;
        }
        ;
    }
}
const user = new User('Dima');
const user1 = new User();

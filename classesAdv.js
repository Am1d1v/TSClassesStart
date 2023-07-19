"use strict";
class Vehicle {
    set model(m) {
        this._model = m;
    }
    get moder() {
        return this._model;
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
new Vehicle().make = 'd';

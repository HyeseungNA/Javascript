'use strict';
// class : template
//object : instance of a class

class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
    speak () {
        console.log(`${this.name}: hello!`)
    }

    get age() {
        console.lot(this._age)
        return this._age;

    }
    set age(value) {
        if (value < 0) {
            throw Error ('age can not be negative');
        }
        this._age = value;
        console.log(this._age)
    }


}
// const ellie = new Person('ellie',20);

const user1 = new Person('Steve',-1);

// public, private

// static


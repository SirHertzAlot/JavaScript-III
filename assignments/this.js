/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This is global binding of the this command. Where it interacts with the browser.
* 2. Anything left of the binding is what this targets.
* 3. 'This' one can only be used with a constructor function and it's returned by the constructor function.
* 4. This is explicitly used when call or apply is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var window = this.window;

// Principle 2

// code example for Implicit Binding

const myDog = {
    greeting: 'Woof Woof!',
    breed: 'Argentino Dogo',
    name: 'Rocky',
    size: 'Large',
    hiRocky: function() {
        console.log(`Hi Rocky!`);
        console.log(`Rocky Responds "${this.greeting}."`)
    }
}
myDog.hiRocky();

// Principle 3

// code example for New Binding
function myPet(name) {
    this.greeting = 'Woof Woof!',
    this.breed = 'Argentino Dogo',
    this.name = name,
    this.size = 'Large',
    this.sayHi = function () {
        console.log("Hi "+ this.name);
        console.log(`${this.name} Responds "${this.greeting}."`)
    }
}

const Dojo = new myPet('Dojo');
const Rocky = new myPet('Rocky');

Rocky.sayHi();
Dojo.sayHi();
// Principle 4

// code example for Explicit Binding

Rocky.sayHi.call(Dojo);
Dojo.sayHi.apply(Rocky);

Rocky.sayHi();
Dojo.sayHi();
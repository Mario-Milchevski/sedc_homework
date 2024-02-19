console.log('hey');

class Animal {
    constructor(name, type, age, size, isEaten = false) {
        this.name = name,
            this.type = type,
            this.age = age,
            this.size = size,
            this.isEaten = isEaten,
            this.eat = function (input) {
                if(!(input instanceof Animal)){
                    console.log(`The animal ${this.name} is eating ${input}`);
                    return
                }
                if (this.type == 'herbivore' && input instanceof Animal) {
                    console.log(`The animal ${this.name} is herbivore and does not eat other animals`);
                }
                else if (input.size >= (this.size*2)) {
                    console.log(`The animal ${this.name} tried to eat the ${input.name} but it was too large`);
                }
                else if (this.type != 'herbivore' && input instanceof Animal) {
                    this.isEaten = true;
                    console.log(`The animal ${this.name} ate the ${input.name}. `);
                }
                
            }
    }
}

class Carnivore extends Animal {
    constructor(name, age, size, isEaten) {
        super(name, 'carnivore', age, size, isEaten)

    }
}

class Herbivore extends Animal {
    constructor(name, age, size, isEaten) {
        super(name, 'herbivore', age, size, isEaten)

    }
}

class Omnivore extends Animal {
    constructor(name, age, size, isEaten) {
        super(name, 'omnivore', age, size, isEaten)

    }
}

let wolf = new Animal('Wolf', 'carnivore', 10, 50);
let moose = new Animal('Moose', 'herbivore', 10, 500);
let human = new Animal('Human', 'omnivore', 10, 100);
let tiger = new Carnivore('Tiger', 15, 200)
let horse = new Herbivore('Horse', 20, 600)
let bear = new Omnivore('Bear', 12, 300)

console.log(tiger);
console.log(horse);
console.log(bear);
debugger
wolf.eat(horse)
wolf.eat(tiger)
wolf.eat(bear)
tiger.eat(horse)
tiger.eat(bear)
tiger.eat('plants')
bear.eat(horse)
horse.eat(bear)
horse.eat('canabis')

bear.eat('everything')
bear.eat(tiger)
bear.eat(wolf)
bear.eat(moose)
bear.eat(human)
tiger.eat(moose)

console.log(wolf);
console.log(moose);
console.log(human);
moose.eat(wolf);
wolf.eat(moose)
human.eat(wolf)
console.log(human.isEaten);
moose.eat('grass');
wolf.eat(human)
human.eat('barbecue')
class Ninja {
    constructor(name, health = 30, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`Ninja name: ${this.name}`);
    }
    showStats() {
        console.log(
            `Ninja name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`
        );
    }
    drinkSake() {
        console.log(`${this.name} drank sake`);
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10, wisdom);
    }
    speakWisdom() {
        super.drinkSake();
        console.log(
            "What one programmer can do in one month, two programmers can do in two months."
        );
    }
    showStats() {
        super.showStats();
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

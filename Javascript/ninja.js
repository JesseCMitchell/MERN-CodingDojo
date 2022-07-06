class Ninja {
    constructor(name, health = 30, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log("Ninja name: " + this.name);
    }
    showStats() {
        this.sayName();
        console.log("Strength: " + this.strength);
        console.log("Speed: " + this.speed);
        console.log("Health: " + this.health);
    }
    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

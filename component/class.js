/**
 * Class Definition
 */

class shaper {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

/**
 * Class Inheritance
 */

class color {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class car extends color {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }

    honda() {
        return `This is ${this.x}, ${this.y}.`;
    }
}

const result = new car("blue", "white", "black");
console.log(result.honda()); // This is blue, white.

/**
 * Static
 */

class demoStatic {
    static color = "RED";
    static funColor() {
        return "black";
    }
}

console.log(demoStatic.color); // RED
console.log(demoStatic.funColor()); // black
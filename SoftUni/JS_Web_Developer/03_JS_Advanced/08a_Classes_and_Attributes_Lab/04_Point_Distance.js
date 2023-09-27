class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(obj1, obj2) {
        return Math.sqrt(
            Math.pow(obj2.x - obj1.x, 2) + Math.pow(obj2.y - obj1.y, 2)
        );
    }
}
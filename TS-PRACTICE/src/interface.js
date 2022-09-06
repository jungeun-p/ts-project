"use strict";
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Ractangle = /** @class */ (function () {
    function Ractangle(height, width) {
        this.height = height;
        this.width = width;
    }
    Ractangle.prototype.getArea = function () {
        return this.height * this.width;
    };
    return Ractangle;
}());
var shpaes = [
    new Circle(5),
    new Ractangle(2, 6)
];
shpaes.forEach(function (shape) {
    console.log(shape.getArea());
});

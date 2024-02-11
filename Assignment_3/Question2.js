var Circle = /** @class */ (function () {
    function Circle(A) {
        this.Radius = A;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        var Ans;
        Ans = this.Radius * this.Radius * this.PI;
        return Ans;
    };
    return Circle;
}());
var objcircle1 = new Circle(2);
var objcircle2 = new Circle(1.2);
var Result = 0;
Result = objcircle1.Area();
console.log(Result);
Result = objcircle2.Area();
console.log(Result);

var CircleX = /** @class */ (function () {
    function CircleX(A) {
        this.Radius = A;
        this.PI = 3.14;
    }
    CircleX.prototype.Circumference = function () {
        var Ans;
        Ans = 2 * this.Radius * this.PI;
        return Ans;
    };
    return CircleX;
}());
var objcirclex1 = new CircleX(2);
var objcirclex2 = new CircleX(1.2);
var Result = 0;
Result = objcirclex1.Circumference();
console.log(Result);
Result = objcirclex2.Circumference();
console.log(Result);

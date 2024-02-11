function Addition(Arr) {
    var Sum = 0;
    var i = 0;
    for (i = 0; i < Arr.length; i++) {
        Sum = Sum + Arr[i];
    }
    return Sum;
}
var Marks = [23, 6, 7, 4, 5, 7];
var Result = 0;
Result = Addition(Marks);
console.log("Addition is : " + Result);

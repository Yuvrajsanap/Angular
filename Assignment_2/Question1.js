function Maximum(Arr) {
    var max = Arr[0];
    var i = 0;
    for (i = 0; i < Arr.length; i++) {
        if (max < Arr[i]) {
            max = Arr[i];
        }
    }
    return max;
}
var Max = [23, 89, 6, 29, 56, 45, 77, 32];
var Result = 0;
Result = Maximum(Max);
console.log("Maximum number : " + Result);

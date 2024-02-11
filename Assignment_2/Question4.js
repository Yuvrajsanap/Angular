function ChkPrime(No) {
    var digit = 0;
    var sum = 0;
    var orginalnum = No;
    var n = No.toString().length;
    while (No != 0) {
        digit = No % 10;
        sum = sum + Math.pow(digit, n);
        No = Math.floor(No / 10);
    }
    return sum == orginalnum;
}
var bRet = false;
bRet = ChkPrime(153);
if (bRet == true) {
    console.log("It is Armstrong number");
}
else {
    console.log("It is not a Armstrong number");
}

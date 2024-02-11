function ChkPrime(No) {
    var bFlag = true;
    var i = 0;
    for (i = 2; i < (No / 2); i++) {
        if ((No % i) == 0) {
            bFlag = false;
            break;
        }
    }
    return bFlag;
}
var bRet = false;
bRet = ChkPrime(11);
if (bRet == true) {
    console.log("It is prime number");
}
else {
    console.log("It is not a prime number");
}

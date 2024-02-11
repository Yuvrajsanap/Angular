function ChkString(str) {
    return str.indexOf("Marvellous") != -1;
}
var bRet = ChkString("Pune Kothrud Marvellous Infosystems");
if (bRet == true) {
    console.log("String contains Marvellous in it");
}
else {
    console.log("String does not have Marvellous in it");
}

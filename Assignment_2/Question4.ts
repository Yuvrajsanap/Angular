function ChkPrime(No:number):boolean
{
    var digit:number=0;
    var sum:number=0;
    var orginalnum:number=No;
    var n:number=No.toString().length;
    while(No!=0){
        digit=No%10;
        sum=sum+Math.pow(digit,n);
        No=Math.floor(No / 10);
    }
    
    return sum==orginalnum;
}

var bRet:boolean=false;

bRet=ChkPrime(153);

if(bRet==true){
    console.log("It is Armstrong number");
}
else{
    console.log("It is not a Armstrong number");
}







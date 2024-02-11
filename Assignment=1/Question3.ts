function DisplayFactor(No1:number):void
{
    var i:number=0;
    for(i=1;i<=(No1/2);i++){
        if((No1%i)==0){
            console.log(i);
        }
    }
}

DisplayFactor(20);



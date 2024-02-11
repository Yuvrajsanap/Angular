function Maximum(Arr:number[]) :number
{
    var max:number=Arr[0];
    var i:number=0;
    for(i=0;i<Arr.length;i++){
        if(max<Arr[i]){
            max=Arr[i];
        }
    }
    return max;
}

var Max:number[]=[23,89,6,29,56,45,77,32];

var Result:number=0;
Result=Maximum(Max);
console.log("Maximum number : "+Result);


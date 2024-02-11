
function Addition(Arr :number[]):number
{
    var Sum:number=0;
    var i:number=0;
    for(i=0;i<Arr.length;i++){
        Sum=Sum+Arr[i];
    }

    return Sum;
}
var Marks:number[]=[23,6,7,4,5,7];


var Result:number=0;
Result=Addition(Marks);
console.log("Addition is : "+Result);


class CircleX{
    public Radius:number;
    public PI:number;

    constructor(A:number){
        this.Radius=A;
        this.PI=3.14;
    }
    Circumference():number{
        var Ans:number;
        Ans=2*this.Radius*this.PI;
        return Ans;
    }
   
}


var objcirclex1=new CircleX(2);
var objcirclex2=new CircleX(1.2);

var Result:number=0;

Result=objcirclex1.Circumference();
console.log(Result);

Result=objcirclex2.Circumference();
console.log(Result);




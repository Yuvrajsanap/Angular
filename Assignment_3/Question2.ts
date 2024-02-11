class Circle{
    public Radius:number;
    public PI:number;

    constructor(A:number){
        this.Radius=A;
        this.PI=3.14;
    }
    Area():number{
        var Ans:number;
        Ans=this.Radius*this.Radius*this.PI;
        return Ans;
    }
   
}


var objcircle1=new Circle(2);
var objcircle2=new Circle(1.2);

var Result:number=0;

Result=objcircle1.Area();
console.log(Result);

Result=objcircle2.Area();
console.log(Result);




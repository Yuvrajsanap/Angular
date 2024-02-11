class Arthmatic{
    public No1:number;
    public No2:number;

    constructor(A:number,B:number){
        this.No1=A;
        this.No2=B;
    }
    Addition():number{
        var Ans:number;
        Ans=this.No1+this.No2;
        return Ans;
    }
    Subtraction():number{
        var Ans:number;
        Ans=this.No1-this.No2;
        return Ans;
    }
    Multiplication():number{
        var Ans:number;
        Ans=this.No1*this.No2;
        return Ans;
    }
    Division():number{
        var Ans:number;
        Ans=this.No1/this.No2;
        return Ans;
    }
}


var obj1=new Arthmatic(10,5);
var obj2=new Arthmatic(50,4);

var Result:number=0;

Result=obj1.Addition();
console.log(Result);

Result=obj2.Addition();
console.log(Result);

Result=obj1.Subtraction();
console.log(Result);

Result=obj2.Subtraction();
console.log(Result);

Result=obj1.Multiplication();
console.log(Result);

Result=obj2.Multiplication();
console.log(Result);

Result=obj1.Division();
console.log(Result);

Result=obj2.Division();
console.log(Result);


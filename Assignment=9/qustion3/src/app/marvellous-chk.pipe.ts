import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number,type : string): string
  {
    switch(type)
    {
      case "prime":
        return this.prime(value) ? "prime" : "Not Prime";
        case "perfect":
        return this.perfect(value) ? "Prefect" : "Not Perfect";
        case "Even":
        return this.Even(value) ? "Even" : "Not Even";
        case "Odd":
        return this.Odd(value) ? "Odd" : "Not Odd";
        default:
          return "Invalid";
    }
  }
    
    public prime(No:number):boolean{
      for(let i=2;i<=(No/2);i++)
      {
        if(No%i==0)
        {
          return false;
        }
      }
      return true;
    }

    public perfect(No:number):boolean
    {
      let iSum=0;
      for(let i=1;i<=(No/2);i++)
      {
        if(No%i==0){
          iSum=iSum+i;
        }
      }
      return No==iSum;
    }

    public Even(No:number):boolean
    {
      return (No%2)===0;
    }

    public Odd(No:number):boolean
    {
      return (No%2)!==0;
    }

}

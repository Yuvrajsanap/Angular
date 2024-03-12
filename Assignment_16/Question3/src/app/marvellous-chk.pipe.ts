import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, check: string): string {
    switch (check) {
      case 'Prime':
        return this.isPrime(value) ? 'Prime' : 'Not Prime';
      case 'Perfect':
        return this.isPerfect(value) ? 'Perfect' : 'Not Perfect';
      case 'Even':
        return this.isEven(value) ? 'Even' : 'Odd';
      case 'Odd':
        return this.isOdd(value) ? 'Odd' : 'Even';
      default:
        return 'Invalid parameter';
    }
  }

  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  private isPerfect(num: number): boolean {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        sum += i;
        if (i * i != num) sum += num / i;
      }
    }
    return sum === num && num !== 1;
  }

  private isEven(num: number): boolean {
    return num % 2 === 0;
  }

  private isOdd(num: number): boolean {
    return num % 2 !== 0;
  }

}

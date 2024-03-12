import { arraySum } from './ArrayAdd';

describe('arraySum', () => {
    it('should return 0 for an empty array', () => {
        const numbers: number[] = [];
        expect(arraySum(numbers)).toBe(0);
    });

    it('should return the correct sum for an array with positive numbers', () => {
        const numbers: number[] = [1, 2, 3, 4, 5];
        expect(arraySum(numbers)).toBe(15);
    });

    it('should return the correct sum for an array with negative numbers', () => {
        const numbers: number[] = [-1, -2, -3, -4, -5];
        expect(arraySum(numbers)).toBe(-15);
    });

    it('should return the correct sum for an array with mixed positive and negative numbers', () => {
        const numbers: number[] = [-1, 2, -3, 4, -5];
        expect(arraySum(numbers)).toBe(-3);
    });

    it('should return the correct sum for an array with only one number', () => {
        const numbers: number[] = [10];
        expect(arraySum(numbers)).toBe(10);
    });
});

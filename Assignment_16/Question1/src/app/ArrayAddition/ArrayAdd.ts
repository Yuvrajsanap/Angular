export function arraySum(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

import { CountCapital } from './countcapital';

describe('CountCapital', () => {
  it('should return the count of capital characters', () => {
    const ret = CountCapital("AAiket");
    expect(ret).toBe(2);
  });
});

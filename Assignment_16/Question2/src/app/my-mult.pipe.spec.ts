import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  let pipe: MyMultPipe;

  beforeEach(() => {
    pipe = new MyMultPipe();
  });

  it('should multiply two numbers correctly', () => {
    const result = pipe.transform(3, 4);
    expect(result).toEqual(12);
  });

  it('should handle negative numbers', () => {
    const result = pipe.transform(-2, 5);
    expect(result).toEqual(-10);
  });
});

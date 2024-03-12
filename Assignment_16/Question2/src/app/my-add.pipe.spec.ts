import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  let pipe: MyAddPipe;

  beforeEach(() => {
    pipe = new MyAddPipe();
  });

  it('should add two numbers correctly', () => {
    const result = pipe.transform(3, 4);
    expect(result).toEqual(7);
  });

  it('should handle negative numbers', () => {
    const result = pipe.transform(-2, 5);
    expect(result).toEqual(3);
  });
});

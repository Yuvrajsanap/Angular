import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  let pipe: MarvellousChkPipe;

  beforeEach(() => {
    pipe = new MarvellousChkPipe();
  });

  it('should identify prime numbers', () => {
    expect(pipe.transform(7, 'Prime')).toBe('Prime');
    expect(pipe.transform(4, 'Prime')).toBe('Not Prime');
  });

  it('should identify perfect numbers', () => {
    expect(pipe.transform(28, 'Perfect')).toBe('Perfect');
    expect(pipe.transform(6, 'Perfect')).toBe('Perfect');
    expect(pipe.transform(10, 'Perfect')).toBe('Not Perfect');
  });

  it('should identify even numbers', () => {
    expect(pipe.transform(8, 'Even')).toBe('Even');
    expect(pipe.transform(3, 'Even')).toBe('Odd');
  });

  it('should identify odd numbers', () => {
    expect(pipe.transform(5, 'Odd')).toBe('Odd');
    expect(pipe.transform(2, 'Odd')).toBe('Even');
  });

  it('should handle invalid parameters', () => {
    expect(pipe.transform(7, 'Invalid')).toBe('Invalid parameter');
  });
});

export function CountCapital(string: string): number {
  var iCount: number = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] >= 'A' && string[i] <= 'Z') {
      iCount++;
    }
  }
  return iCount;
}

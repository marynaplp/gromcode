import { getSum } from './getsum.js';
it('should return  the sum if a % 2 === 0', () => {
    const result = getSum(4, 6);
    expect(result).toEqual(10);
});
it('should return null  if expression === string', () => {
    const result = getSquaredArray();
    expect(result).toEqual(null);
});
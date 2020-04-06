import { calc } from './calculator';
it('should get sum from the expression ', () => {
    const result = getSquaredArray('8 + 4');
    expect(result).toEqual(result);

});
it('should get difference from the expression', () => {
    const result = getSquaredArray('8-4');
    expect(result).toEqual(result);

});
it('should get multiplication from the expression', () => {
    const result = getSquaredArray('8*4');
    expect(result).toEqual(result);

});
it('should get the divide number from the expression', () => {
    const result = getSquaredArray('8/4');
    expect(result).toEqual(result);

});
it('should get the divide number from the expression', () => {
    const result = getSquaredArray('8/4');
    expect(result).toEqual(result);

});
it('should null if expression === string', () => {
    const result = getSquaredArray();
    expect(result).toEqual(null);

});
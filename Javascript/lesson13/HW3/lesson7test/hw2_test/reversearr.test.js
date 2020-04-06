import { reverseArray } from './reversearr.js';
it('should return argument as a array', () => {
    const result = reverseArray(7);
    expect(result).toEqual(null);
});

it('should return argument as a resversed array', () => {
    const result = reserveArray([3, 4, 5, 6, 7, 8, 9]);
    expect(result).toEqual([9, 8, 7, 6, 5, 4, 3]);
});
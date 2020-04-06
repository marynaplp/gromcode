import { squareArray } from './squarearray.js';

it('should return null if argument not an array', () => {
    const result = squareArray('3,4,5')
    expect(result).toEqual('null')
});

it('should return squred elements if argument is an array', () => {
    const result = squareArray([3, 4, 5])
    expect(result).toEqual([9, 16, 25])
});
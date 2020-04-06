import { increaseEvenEl } from './increaseevenel.js';


it('should return null if as a array is not an array', () => {
    const result = increaseEvenEl();
    expect(result).toEqual(null);
});
it('should increase Even elements by delta ', () => {
    const result = increaseEvenEl([2, 3, 8, 13, 16], 10);
    expect(result).toEqual([12, 3, 18, 13, 26]);

})
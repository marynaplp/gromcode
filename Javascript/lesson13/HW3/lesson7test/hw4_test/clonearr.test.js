import { cloneArr } from './cloneArr.js';


it('should return null if argument is not an array', () => {
    const result = cloneArr();
    expect(result).toEqual(null);
});
it('should clone an array', () => {
            const result = cloneArr([2, 3, 8, 13, 16]);
            expect(result).toEqual([
                    [2, 3, 8, 13, 16]);

            });
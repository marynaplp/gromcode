import { getAdults } from 'getadults.js'
it('should return object wiht names equal 18 years old', () => {
    const result = getAdults({
        'John Doe': 19,
        'Tom': 17,
        'Bob': 18
    });
    expect(result).toEqual({
        'John Doe': 19,
        Bob ': 18,
    });

});
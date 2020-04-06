import { getPrimes } from './getprimes.js';

it('should return a prime number', () => {
    const result = getPrimes();
    expect(result).toEqual(7);
});

it('should return n as number', () => {
    const result = getPrimes('6');

    expect(result).toEqual(null);
});

it('should return n >0', () => {
    const result = getPrimes(0);
})
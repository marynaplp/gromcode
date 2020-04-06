import { increaser } from './increaser.js';
it('if a < index  return a ', () => {
    const result = increaser(a, b);
    expect(result).toEqual(a);
});
it('if a > index return a+index', () => {
    const result = increaser(a, b);
    expect(result).toEqual(a);
});

it('if a = index return a', () => {
    const result = increaser(a, b);
    expect(result).toEqual(a);
});
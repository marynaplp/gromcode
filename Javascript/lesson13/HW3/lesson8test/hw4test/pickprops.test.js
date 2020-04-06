import { pickprops } from './pickprops.js'
it(' should return objects with properties  which are in the array ', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 });
    expect(result).toEquals({ a: 1, c: 3 })
});
it('should skip property if it is not in the array', () => {
    const result = pickProps({
        a: 1,
        b: 2,
        c: 3
    });
    expect(result).toEquals({
        a: 1,
        c: 3
    })

});
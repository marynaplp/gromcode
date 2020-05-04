export const compose = (...funcs) => value => {
    return funcs.reduce((acc, funcs) => funcs(acc), value);

}
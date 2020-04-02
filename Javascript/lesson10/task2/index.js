const getParsedIntegers = arr => {
    return arr.map(item => Number.parselnt(item))
}

const getParsedIntegersV2 = arr => {
    return arr.map(item => parseInt(item))

}
const getParsedFloats = arr => {
    return arr.map(item => Number.parseFloat(item))
}
const getParsedFloatsV2 = arr => {
    return arr.map(item => parseFloat(item))
}
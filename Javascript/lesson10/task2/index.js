const getParsedIntegers = arr => {
    return arr.map(item => Number.parselnt(item))
}

const getParsedIntegersV2 = arr => {
    return num.filter(item => parseInt(item))

}
const getParsedFloats = num => {
    return num.filter(item => Number.parseFloat(item))
}
const getParsedFloatsV2 = num => {
    return num.filter(item => parseFloat(item))
}
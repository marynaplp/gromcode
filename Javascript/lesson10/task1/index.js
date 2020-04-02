const getFiniteNumbers = num => {
    return num.filter(item => Number.isFinite(item))
}
const getFiniteNumbersV2 = num => {
    return num.filter(item => isFinite(item))
}
const getNaN = num => {
    return num.filter(item => Number.isNaN(item))
}
const getNaNV2 = num => {
    return num.filter(item => isNaN(item))

}
const getIntegers = num => {
    return num.filter(item => Number.isIntegers)
}
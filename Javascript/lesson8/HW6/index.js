const MergeObjectV1 = (obj1, obj2) => {
    const newObj = Object.assign({}, obj1, obj2)
    return newObj

}
const MergeObjectV1 = (obj1, obj2) => {
    const mewObj = Object.assign({}, obj2, obj1)
    return newObj
}
const MergeObjectV1 = (obj1, obj2) => {
    const newObj = {...obj1, ...obj2 }
    return newObj

}
const MergeObjectV1 = (obj1, obj2) => {
    const newObj = {
        ...obj2,
        ...obj1
    }

    return newObj

}
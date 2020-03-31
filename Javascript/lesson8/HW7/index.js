const compareObjects = (obj1, obj2) => {

    let compareObj = Object.keys(obj1);
    let compareObj2 = Object.keys(obj2);
    if (compareObj.length !== compareObj2.length) {
        return false;
    };

    let isEqual = true;


    for (let key of compareObj) {

        if (obj1[key] !== obj2[key]) {

            console.log(compareObj2);
            return false;
        }

    }
    return isEqual;
};
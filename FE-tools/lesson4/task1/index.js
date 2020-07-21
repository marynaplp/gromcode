import './polyfills/array-flat.js'
import './polyfills/array-flatMap.js'
import fetchUser from './profile/gateway.js'
import calcExpression, {
    sum,
    mult
} from "./calculator/index.js";



const calcResult = calcExpression('1 + 2');
const sumResult = sum(1, 2);
const multResult = mult(1, 2);
const userDataPromise = fetchUser('facebook');
printProfile({
    name: 'Tom',
    from: 'The World'
});
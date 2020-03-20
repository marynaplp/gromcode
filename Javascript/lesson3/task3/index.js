/* сравнение чисел */

const a = 17;
const b = 5;
a > b;
console.log("a > b: ", a > b); //true

a <= b;
console.log("a <== b: ", a <= b); //false

a == b;
console.log("a == b: ", a == b); //  false

a != b;
console.log("a != b: ", a != b); //true



/* сравнение строк */

'a' < 'b';
console.log("'a' < 'b': ", 'a' < 'b'); //true

'ab' > 'a';
console.log("'ab' > 'a': ", 'ab' > 'a');

/* строгое сравнение */

17 === 1;
console.log("17 === 1: ", 17 === 1); //false
17 === 17;
console.log("17 === 17: ", 17 === 17); //true
17 === '17';
("17 === '17': ", 17 === '17'); //false
17 === true;
console.log("17 === true: ", 17 === true); //false
'0' === '';
console.log("'0' === '': ", '0' === ''); //false
true === false;
console.log("true === false: ", true === false); //false
true === true;
console.log("true === true: ", true === true); //true
null === undefined;
console.log("null === undefined: ", null === undefined); //false
false === 0
console.log("false === 0: ", false === 0); // false


/* нестрогое сравнение */

17 == '17';
console.log("17 === '17': ", 17 == '17'); //true
'0' == '';
console.log("'0' == '': ", '0' == ''); //false
0 == '';
console.log("0 == '': ", 0 == ''); //true
null == undefined;
console.log("null == undefined: ", null == undefined); //true
false == 0;
console.log("false == 0: ", false == 0); //true


/* осторожно c null и undefined */

undefined == null;
console.log("undefined == null: ", undefined == null);
undefined == 0;
console.log("undefined == 0: ", undefined == null); // true
null == 0;
console.log("null == 0: ", null == 0);
undefined < 0;
console.log("undefined < 0: ", undefined < 0);
undefined > 0;
console.log("undefined > 0: ", undefined > 0);
window.addEventListener('error', function onUnhandledError(err) {
    console.log(err)
});
let userParsingResult;
try {
    const user = JSON.parse('{"name":"Maryna"}')
    console.log("User data: ", user);
    userParsingResult = "success";
} catch (e) {
    userParsingResult = "error";
} finally {
    console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;
try {
    const product = JSON.parse('{"name":"Maryna" ');
    console.log("Product data: ", product);
    productParsingResult = "success";
} catch (e) {
    productParsingResult = "error";
} finally {
    console.log(`Product parsing finished with ${productParsingResult}`);
}
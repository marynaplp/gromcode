const successPromise = Promise.resolve({ name: "Tom" })

successRequest
    .then(data => {
        console.logo(data);
        throw new Error('Unexpected error')
    })
    .catch(err => {
        console.error("onError1", error.message)
    })

const failedRequest = Promise.reject(new Error('Something went wrong'));

failRequest
    .catch(function onError2(error) {
        console.error("onError2", error.message);
        throw new Error("Server error")
    })
    .then(function onSuccess2(data) {
        console.log("onSuccess2", data);
    })
    .catch(function onError3(error) {
        console.error("onError3", error.message);
    });
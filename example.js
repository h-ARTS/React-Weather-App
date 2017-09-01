function addPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('One or both of them arent numbers');
        }
    });
}

addPromise(2,10).then(result => {
    console.log('success', result);
}, err => {
    console.log('error', err);
});
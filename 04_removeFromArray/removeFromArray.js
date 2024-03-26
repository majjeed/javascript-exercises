const removeFromArray = function () {
    let args = [...arguments].slice(1);
    let arr = [...arguments][0];
    let filtered = [];
    // for (let i = 0; i < args.length; i++) {
    //     for (let toRemove of args) {

    //     }
    // }
    let i = 0;
    do {
        for (let element of arr) {
            if (element != args[i]) {
                filtered.push(element);
            }
        }
        arr = filtered;
        filtered = [];
        i++;
    } while (i < args.length);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

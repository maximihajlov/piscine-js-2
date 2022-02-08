function flat(array, depth = 1) {
    let result = [];

    (function flatter(array, depth) {
        array.forEach(function (el) {
            if (Array.isArray(el) && depth > 0) flatter(el, depth - 1);
            else result.push(el);
        });
    })(array, depth);

    return result;
}
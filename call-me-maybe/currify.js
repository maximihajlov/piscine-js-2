function currify(func) {
    return function curried(...args) {
        if (args.length === func.length) {
            return func(...args);
        }
        return function (...argsNew) {
            return curried(...args.concat(argsNew));
        }
    };
}

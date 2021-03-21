function spy(obj, method) {
    let originalFunction = obj[method];

    let invoked = {
        count: 0
    };

    obj[method] = function () {
        invoked.count++;
        return originalFunction.apply(this, arguments);
    }

    return invoked;
}

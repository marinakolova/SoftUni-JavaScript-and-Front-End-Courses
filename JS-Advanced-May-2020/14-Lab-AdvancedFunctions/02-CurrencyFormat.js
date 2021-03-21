function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function result(fn) {
    const separator = ',';
    const symbol = '$';
    const symbolFirst = true;

    return function(value) {
        return fn(separator, symbol, symbolFirst, value);
    }
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
};

function result(separator, symbol, symbolFirst, formatter) {
    return function(value) {
        return formatter(separator, symbol, symbolFirst, value);
    }
}

export function isOdd(n) {
    return Math.abs( n % 2) === 1;
}

export function getColAsInt(columns, coordinate) {
    return columns[coordinate.charAt(0)];
}

export function getRowAsInt(coordinate) {
    return parseInt(coordinate.charAt(1), 10);
}


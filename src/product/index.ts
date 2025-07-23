export function getProduct(...numbers: number[]): number {
    if (!numbers.length) {
        return 0;
    }
    return numbers.reduce((number, product) => number * product,1);
}
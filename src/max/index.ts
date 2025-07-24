export function getMax(numbers: number[]): number | null {
    if(numbers.length === 0) {
        return null;
    }

    let max = -Infinity;
    for(const number of numbers) {
        if(number > max) {
            max = number;
        }
    }

    return max;
}
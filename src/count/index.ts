export function getCount<T>(list: T[], value: T): number {
    return list.filter(item => JSON.stringify(item) === JSON.stringify(value)).length;
}
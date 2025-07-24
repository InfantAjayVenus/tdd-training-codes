import { describe, expect, it } from "vitest";
import { getCount } from ".";

describe('get count should', () => {
    it.each([
        [[], 1, 0],
        [[], 'a', 0],
        [[], true, 0],
        [[], {test: 'value'}, 0],
    ])('return 0 if the array is empty', (inputList, inputValue, expectedCount) => {
        expect(getCount(inputList, inputValue)).toBe(expectedCount);
    });

    it.each([
        [[2, 3], 1, 0],
        [['b', 'c'], 'a', 0],
        [[false], true, 0],
        [[{test: 'value1'}, {test: 'value2'}], {test: 'value'}, 0],
    ])('return 0 if the value is not in the array', (inputList, inputValue, expectedCount) => {
        expect(getCount(inputList, inputValue)).toBe(expectedCount);
    });

    it.each([
        [[1,2, 1, 3], 1, 2],
        [['a', 'b', 'c'], 'a', 1],
        [[true, false, true, true], true, 3],
        [[{test: 'value1'}, {test: 'value2'}, {test: 'value'}], {test: 'value'}, 1],
    ])('returns count if the value is present', (inputList, inputValue, expectedCount) => {
        expect(getCount(inputList, inputValue)).toBe(expectedCount);
    });
});
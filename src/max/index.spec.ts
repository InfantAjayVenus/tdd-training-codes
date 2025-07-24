import { describe, expect, it } from "vitest";
import { getMax } from ".";
describe('getMax should', () => {
    it('return null if no numbers are provided', () => {
        expect(getMax([])).toBeNull();
    });

    it('return the number itself if a single number is provided', () => {
        expect(getMax([5])).toBe(5);
    });

    it.each([
        [[1, 0], 1],
        [[0, 1], 1],
        [[-1, 1], 1],
        [[-1, 1, 2], 2],
    ])('return the largest number if multiple numbers are provided', () => {
        expect(getMax([0,1])).toBe(1);
    });
});



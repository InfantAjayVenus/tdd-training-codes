import { describe, expect, it } from "vitest";
import { getProduct } from ".";

describe('product should', () => {
    it('return 0 when no parameters are passed', () => {
        expect(getProduct()).toBe(0);
    });

    it('return the number itself when one parameter is passed', () => {
        expect(getProduct(1)).toBe(1);
    });

    it('return the product of the parameters when more than one parameters are passed', () => {
        expect(getProduct(1, 2)).toBe(2);
    });
});



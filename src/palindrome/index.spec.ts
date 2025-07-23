import { describe, it, expect } from "vitest";
import { isPalindrome } from ".";

describe("palindrome", () => {
    it('should return true for empty', () => {
        expect(isPalindrome("")).toBe(true);
    });

    it('should return true for single character', () => {
        expect(isPalindrome("a")).toBe(true);
    });

    it('should return true for two same characters', () => {
        expect(isPalindrome("aa")).toBe(true);
    });

    it('should return false for two different characters', () => {
        expect(isPalindrome("ab")).toBe(false);
    });

    it('should return true for two same characters with different casing', () => {
        expect(isPalindrome("Aa")).toBe(true);
    });

    it.each([
        "a ",
        " a",
        "ab a",
        "ab  cb a",
        "ab  cb\ta",
        "ab  cb\na",
        "ab?a"
    ])('should ignore white spaces in between the phrase when checking for palindrome', (phrase) => {
        expect(isPalindrome(phrase)).toBe(true);
    });

    it.each([
        ["Eine güldne, gute Tugend: Lüge nie!", true],
        ["Eine göldne, gute Tugend: Lüge nie!", false]
    ])('should consider diacritics when checking for palindrome', (phrase, expectedResult) => {
        expect(isPalindrome(phrase)).toBe(expectedResult);
    });

    it.each([
        ["上海自來水來自海上", true],
        ["上海的自來水來自海上", false]
    ])('should consider japanese when checking for palindrome', (phrase, expectedResult) => {
        expect(isPalindrome(phrase)).toBe(expectedResult);
    });

    it.each([
        ["🧟", true],
        ["🧟🎄", false]
    ])('should consider emojis when checking for palindrome', (phrase, expectedResult) => {
        expect(isPalindrome(phrase)).toBe(expectedResult);
    });

});

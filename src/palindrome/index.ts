export function isPalindrome(phrase: string): boolean {
    const punctuationAndSpacesRegex = /[\p{P}\p{White_Space}]+/gu;
    const phraseWithoutPunctuationAndSpace = phrase.replace(punctuationAndSpacesRegex, '');

    const reversePhrase = [...phraseWithoutPunctuationAndSpace].reverse().join(''); 

    return phraseWithoutPunctuationAndSpace.toLowerCase() === reversePhrase.toLowerCase();
}

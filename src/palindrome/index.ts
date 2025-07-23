export function isPalindrome(phrase: string): boolean {
    const punctuationAndSpacesRegex = /[\p{P}\p{White_Space}]+/gu;
    const phraseWithoutPunctuationAndSpace = phrase.replace(punctuationAndSpacesRegex, '').toLowerCase();

    const reversePhrase = [...phraseWithoutPunctuationAndSpace].reverse().join(''); 

    return phraseWithoutPunctuationAndSpace === reversePhrase;
}

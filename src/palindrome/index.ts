export function isPalindrome(phrase: string): boolean {
    const punctuationAndSpacesRegex = /[\p{P}\p{White_Space}]+/gu;
    const phraseWithoutPunctuationAndSpace = phrase.replace(punctuationAndSpacesRegex, '');

    const reversePhrase = getReversedPhrase(phraseWithoutPunctuationAndSpace); 


    return phraseWithoutPunctuationAndSpace.toLowerCase() === reversePhrase.toLowerCase();
}

function getReversedPhrase(phraseWithoutPunctuationAndSpace: string) {
    const emojiTable = {};
    const phraseWithModifiedEmojis = phraseWithoutPunctuationAndSpace.replace(/\p{Emoji}/ug, (emoji, idx) => {
        const index = `#${idx}#`;
        emojiTable[index] = emoji;

        return index;
    });

    const reversedPhraseWithModifiedEmojis = phraseWithModifiedEmojis.split('').reverse().join('');

    const reversePhrase = reversedPhraseWithModifiedEmojis.replace(/\#\d\#/g, (index) => {
        return emojiTable[index];
    });
    return reversePhrase;
}


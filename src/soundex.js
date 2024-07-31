function getSoundexCode(char) {
    const soundexDict = {
        'B': '1', 'F': '1', 'P': '1', 'V': '1',
        'C': '2', 'G': '2', 'J': '2', 'K': '2', 'Q': '2', 'S': '2', 'X': '2', 'Z': '2',
        'D': '3', 'T': '3',
        'L': '4',
        'M': '5', 'N': '5',
        'R': '6'
    };
    return soundexDict[char] || '0';
}

function isVowelOrIgnored(char) {
    const ignoredChars = new Set('AEIOUYHW');
    return ignoredChars.has(char);
}

function processChar(char, lastDigit, soundexCode) {
    if (isVowelOrIgnored(char)) return [lastDigit, soundexCode]; 
    const currentDigit = getSoundexCode(char);
    if (currentDigit !== lastDigit && currentDigit !== '0') {
        soundexCode += currentDigit;
        lastDigit = currentDigit;
    }
    return [lastDigit, soundexCode];
}

function generateSoundex(word) {
    if (!word) return '';
    word = word.toUpperCase();
    let soundexCode = word[0]; 
    let lastDigit = getSoundexCode(word[0]);

    for (let i = 1; i < word.length; i++) {
        [lastDigit, soundexCode] = processChar(word[i], lastDigit, soundexCode);
    }

    return (soundexCode + '0000').slice(0, 4);
}

module.exports = {
    getSoundexCode,
    generateSoundex
};

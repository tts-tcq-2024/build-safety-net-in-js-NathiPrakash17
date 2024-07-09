function getSoundexCode(char) {
    char = char.toUpperCase();
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
    const vowelsAndIgnored = new Set(['A', 'E', 'I', 'O', 'U', 'Y', 'H', 'W']);
    return vowelsAndIgnored.has(char);
}

function characterRemoval(name) {
    const filteredCharacters = name.split('').filter(char => !isVowelOrIgnored(char));
    return filteredCharacters.join('');
}

function fillWithZeros(array, length) {
    while (array.length < length) {
        array.push('0');
    }
}

function generateSoundex(name) {
    if (!name || typeof name !== 'string' || name.length === 0) return '';

    const soundexNames = characterRemoval(name.toUpperCase()).slice(0, 4);

    if (soundexNames.length === 0) return '';

    const soundex = [getSoundexCode(soundexNames[0])];
    let lastDigit = soundex[0];

    soundexNames.slice(1).forEach(char => {
        const code = getSoundexCode(char);
        if (code !== '0' && code !== lastDigit) {
            soundex.push(code);
            lastDigit = code;
        }
    });

    fillWithZeros(soundex, 4);

    return soundex.join('');
}


module.exports = {
    getSoundexCode,
    generateSoundex
};

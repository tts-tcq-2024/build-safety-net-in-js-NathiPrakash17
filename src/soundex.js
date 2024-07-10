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
    return name.split('').filter(char => !isVowelOrIgnored(char)).join('');
}

function fillWithZeros(array, length) {
    return array.concat(Array(length - array.length).fill('0'));
}

function generateSoundex(name) {
    if (!name || typeof name !== 'string' || name.length === 0) return '';

    const upperName = name.toUpperCase();
    const firstLetter = upperName.charAt(0);
    const soundexNames = characterRemoval(upperName).slice(0, 4);

    if (soundexNames.length === 0) return '';

    let soundex = [getSoundexCode(firstLetter)];
    let lastDigit = soundex[0];

    soundexNames.split('').forEach(char => {
        const code = getSoundexCode(char);
        if (code !== '0' && code !== lastDigit) {
            soundex.push(code);
            lastDigit = code;
        }
    });

    soundex = fillWithZeros(soundex, 4);

    return soundex.join('');
}

module.exports = {
    getSoundexCode,
    generateSoundex
};

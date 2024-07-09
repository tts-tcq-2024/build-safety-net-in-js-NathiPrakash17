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

function soundexName(name) {
    if (!name) return '';
    return characterRemoval(name.toUpperCase());
}

function fillWithZeros(array, length) {
    while (array.length < length) {
        array.push('0');
    }
}

function getPreviousSoundexCode(soundexNames, currentIndex) {
    if (currentIndex <= 0) {
        return '';
    }
    return getSoundexCode(soundexNames[currentIndex - 1]);
}

function generateSoundex(name) {
    if (!name) return '';

    let soundexNames = soundexName(name);
    let soundex = [];

    soundexNames.slice(0, 4).forEach((name, index) => {
        let code = getSoundexCode(name);
        if (code !== '0' && (index === 0 || code !== getPreviousSoundexCode(soundexNames, index))) {
            soundex.push(code);
        }
    });

    fillWithZeros(soundex, 4);

    return soundex.join('');
}

module.exports = {
    getSoundexCode,
    generateSoundex
};


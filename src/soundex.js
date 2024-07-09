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

function characterRemoval(name) {
    const filteredCharacters = name.split('').filter(char => !isVowelOrIgnored(char));
    return filteredCharacters.join('');
}

function soundexName(name) {
    if (!name) return '';
    return characterRemoval(name.toUpperCase());
}
function generateSoundex(name) {
    if (!name) return '';

    let soundexNames = soundexName(name);
    let soundex = [soundexNames[0]];
    let prevCode = getSoundexCode(soundexNames[0]);

    for (let i = 1; i < soundexNames.length && soundex.length < 4; i++) {
        let code = getSoundexCode(soundexNames[i]);
        if (code !== '0' && code !== prevCode) {
            soundex.push(code);
        }
        prevCode = code;
    }

    while (soundex.length < 4) {
        soundex.push('0');
    }

    return soundex.join('');
}

module.exports = {
    getSoundexCode,
    generateSoundex
};


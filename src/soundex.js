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

function getNewDigit(char) {
  if (isVowelOrIgnored(char)) {
    return null;
  }
  return getSoundexCode(char);
}

function updateSoundex(lastDigit, soundexCode, currentDigit) {
  if (currentDigit !== lastDigit && currentDigit !== '0') {
    soundexCode += currentDigit;
    lastDigit = currentDigit;
  }
  return [lastDigit, soundexCode];
}

function processChar(char, lastDigit, soundexCode) {
  const currentDigit = getNewDigit(char);
  if (currentDigit === null) {
    return [lastDigit, soundexCode];
  }
  return updateSoundex(lastDigit, soundexCode, currentDigit);
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

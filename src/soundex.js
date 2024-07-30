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
    while (array.length < length) {
        array.push('0');
    }
    return array;
}


function isValidInput(name) {
  return typeof name === 'string' && name.length > 0;
}

function prepareInput(name) {
  const upperName = name.toUpperCase();
  return characterRemoval(upperName);
}

function createSoundexCore(preparedName) {
  const firstLetterCode = getSoundexCode(preparedName[0]);
  const soundexCodes = preparedName.slice(1).map(char => getSoundexCode(char));

  const soundexCore = [firstLetterCode];
  let lastDigit = firstLetterCode;

  soundexCodes.forEach(code => {
    if (code !== '0' && code !== lastDigit) {
      soundexCore.push(code);
      lastDigit = code;
    }
  });

  return soundexCore;
}

function formatSoundex(soundexCore) {
  return fillWithZeros(soundexCore, 4).join('');
}

function generateSoundex(name) {
  if (!isValidInput(name)) {
    return '';
  }

  const preparedName = prepareInput(name);
  const soundexCore = createSoundexCore(preparedName);
  const formattedSoundex = formatSoundex(soundexCore);

  return formattedSoundex;
}
module.exports = {
    getSoundexCode,
    generateSoundex
};

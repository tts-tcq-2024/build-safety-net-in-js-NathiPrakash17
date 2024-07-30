const { expect } = require('chai');
const { generateSoundex } = require('../src/soundex');

describe('Soundex Algorithm', () => {
    it('should handle empty strings', () => {
        expect(generateSoundex("")).to.equal("");
    });

    it('should handle single characters', () => {
        expect(generateSoundex("A")).to.equal("A000");
    });
    
   it('should return the correct soundex code for a consonant', () => {
      expect(getSoundexCode('B')).to.equal('1');
    });

    it('should return 0 for non-consonant characters', () => {
      expect(getSoundexCode('A')).to.equal('0');
    });

     it('should return true for vowels and ignored characters', () => {
      expect(isVowelOrIgnored('A')).to.be.true;
      expect(isVowelOrIgnored('H')).to.be.true;
    });

    it('should return false for consonants', () => {
      expect(isVowelOrIgnored('B')).to.be.false;
    });

     it('should remove vowels and ignored characters from a string', () => {
      expect(characterRemoval('hello')).to.equal('llo');
    });

     it('should add zeros to an array to reach the desired length', () => {
      expect(fillWithZeros(['1', '2'], 4)).to.deep.equal(['1', '2', '0', '0']);
    });

    it('should return true for valid input', () => {
      expect(isValidInput('test')).to.be.true;
    });

    it('should return false for invalid input', () => {
      expect(isValidInput('')).to.be.false;
      expect(isValidInput(123)).to.be.false;
      expect(isValidInput(null)).to.be.false;
    });

     it('should convert input to uppercase and remove vowels', () => {
      expect(prepareInput('hello world')).to.equal('HLLWRD');
    });

     it('should generate the correct soundex core', () => {
      expect(createSoundexCore('Robert')).to.deep.equal(['R', '1', '4', '2']);
    });

     it('should pad the soundex core with zeros', () => {
      expect(formatSoundex(['R', '1'])).to.equal('R100');
    });

      it('should generate the correct soundex code', () => {
      expect(generateSoundex('Robert')).to.equal('R142');
    });

    it('should handle single characters', () => {
      expect(generateSoundex('A')).to.equal('A000');
    });
    
});

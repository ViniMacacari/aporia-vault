"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BepCryptDecryption = void 0;
const separators_1 = require("../utils/separators");
const special_characters_1 = require("../utils/special-characters");
class BepCryptDecryption extends separators_1.BepCryptSeparator {
    constructor() {
        super(...arguments);
        this.separator = new separators_1.BepCryptSeparator();
        this.specialCharacters = new special_characters_1.SpecialCharacters();
        this.encryptionKey = '';
    }
    decrypt(key, text) {
        this.encryptionKey = key;
        const textUTFBack = this.backUTFValues(text, this.encryptionKey);
        const encryptedWords = textUTFBack.split(' ');
        const decryptedText = this.decryptText(encryptedWords, this.encryptionKey);
        let originalText = this.specialCharacters.backToNormal(decryptedText);
        originalText = this.separator.applyLines(originalText);
        originalText = this.separator.removeSpaces(originalText);
        return originalText;
    }
    backUTFValues(text, encryptionKey) {
        let modifiedText = '';
        let keyCharSum = 0;
        for (let i = 0; i < encryptionKey.length; i++) {
            keyCharSum += encryptionKey.charCodeAt(i);
        }
        for (let i = 0; i < text.length; i++) {
            let utf8Value = text.charCodeAt(i);
            utf8Value -= keyCharSum;
            if (utf8Value < 0) {
                utf8Value = 1114111 + utf8Value;
            }
            if (utf8Value > 1114111) {
                utf8Value = utf8Value - 1114111;
            }
            modifiedText += String.fromCharCode(utf8Value);
        }
        return modifiedText;
    }
    decryptText(encryptedWords, encryptionKey) {
        let decryptedText = '';
        for (const encryptedWord of encryptedWords) {
            const uniqueStringIndex = encryptedWord.indexOf('x102jsd-');
            if (uniqueStringIndex === -1) {
                continue;
            }
            const encryptedNumbersStr = encryptedWord.slice(0, uniqueStringIndex);
            const uniqueString = encryptedWord.slice(uniqueStringIndex);
            let keySum = 0;
            for (let i = 0; i < encryptionKey.length; i++) {
                keySum += encryptionKey.charCodeAt(i);
            }
            const uniqueNumberMatch = uniqueString.match(/x102jsd-(\d+)-ojn19/);
            if (!uniqueNumberMatch) {
                continue;
            }
            const uniqueNumber = parseInt(uniqueNumberMatch[1], 10);
            let decryptedWord = '';
            let reversedEncryptedNumbersStr = '';
            for (let i = 0; i < encryptedNumbersStr.length; i += 3) {
                const block = encryptedNumbersStr.substring(i, i + 3);
                let modifiedBlock = '';
                for (let j = 0; j < block.length; j++) {
                    let utf8Value = block.charCodeAt(j);
                    let modifiedValue = utf8Value - uniqueNumber;
                    if (modifiedValue < 0) {
                        modifiedValue = utf8Value + uniqueNumber;
                    }
                    modifiedBlock += String.fromCharCode(modifiedValue);
                }
                reversedEncryptedNumbersStr += modifiedBlock;
            }
            const numbers = [];
            for (let i = 0; i < reversedEncryptedNumbersStr.length; i += 10) {
                const tempStr = reversedEncryptedNumbersStr
                    .slice(i, i + 10)
                    .split('')
                    .map(char => String.fromCharCode(char.charCodeAt(0) - 48))
                    .join('');
                const sanitizedStr = tempStr.replace(/^0+/, '').split('.')[0];
                const parsedNumber = parseInt(sanitizedStr, 10);
                if (!isNaN(parsedNumber) && parsedNumber >= 0) {
                    numbers.push(parsedNumber);
                }
            }
            for (let i = 0; i < numbers.length; i++) {
                const encryptedNumber = numbers[i];
                const positionInWord = i + 1;
                const keyChar = encryptionKey[i % encryptionKey.length];
                const keyCharCode = keyChar.charCodeAt(0);
                const utf8Position = encryptedNumber - (keyCharCode * positionInWord);
                if (utf8Position >= 0 && utf8Position <= 1114111) {
                    decryptedWord += String.fromCharCode(utf8Position);
                }
                else {
                    console.warn('Unidentified word, possible alteration in the base text or error in the private key.');
                }
            }
            decryptedText += decryptedWord + ' ';
        }
        return decryptedText.trim();
    }
}
exports.BepCryptDecryption = BepCryptDecryption;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjcnlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNyeXB0aW9uL2RlY3J5cHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0RBQXVEO0FBQ3ZELG9FQUErRDtBQUUvRCxNQUFhLGtCQUFtQixTQUFRLDhCQUFpQjtJQUF6RDs7UUFDWSxjQUFTLEdBQXNCLElBQUksOEJBQWlCLEVBQUUsQ0FBQTtRQUN0RCxzQkFBaUIsR0FBc0IsSUFBSSxzQ0FBaUIsRUFBRSxDQUFBO1FBQzlELGtCQUFhLEdBQVcsRUFBRSxDQUFBO0lBeUh0QyxDQUFDO0lBdkhVLE9BQU8sQ0FBQyxHQUFXLEVBQUUsSUFBWTtRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQTtRQUN4QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDaEUsTUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM3QyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDMUUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNyRSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDdEQsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRXhELE9BQU8sWUFBWSxDQUFBO0lBQ3ZCLENBQUM7SUFFTyxhQUFhLENBQUMsSUFBWSxFQUFFLGFBQXFCO1FBQ3JELElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQTtRQUNyQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUE7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
import { BepCryptSeparator } from "../utils/separators.js";
import { SpecialCharacters } from "../utils/special-characters.js";
export class BepCryptDecryption extends BepCryptSeparator {
    separator = new BepCryptSeparator();
    specialCharacters = new SpecialCharacters();
    encryptionKey = '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjcnlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNyeXB0aW9uL2RlY3J5cHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUE7QUFFbEUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGlCQUFpQjtJQUM3QyxTQUFTLEdBQXNCLElBQUksaUJBQWlCLEVBQUUsQ0FBQTtJQUN0RCxpQkFBaUIsR0FBc0IsSUFBSSxpQkFBaUIsRUFBRSxDQUFBO0lBQzlELGFBQWEsR0FBVyxFQUFFLENBQUE7SUFFM0IsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFZO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO1FBQ3hCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNoRSxNQUFNLGNBQWMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzdDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUMxRSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3JFLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN0RCxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUE7UUFFeEQsT0FBTyxZQUFZLENBQUE7SUFDdkIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxJQUFZLEVBQUUsYUFBcUI7UUFDckQsSUFBSSxZQUFZ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
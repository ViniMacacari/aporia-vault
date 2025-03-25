import { BepCryptSeparator } from "../utils/separators.js";
import { SpecialCharacters } from "../utils/special-characters.js";
export class BepCryptEncryption {
    separator = new BepCryptSeparator();
    specialCharacters = new SpecialCharacters();
    encryptionKey = '';
    encrypt(key, originalText) {
        this.encryptionKey = key;
        const textWithoutNewLines = this.separator.removeLines(originalText);
        const modifiedText = this.separator.applySpaces(textWithoutNewLines);
        const replacedText = this.specialCharacters.replaceSpecialCharacters(modifiedText);
        const words = replacedText.split(' ');
        let encryptedText = this.startBlockEncoding(words);
        encryptedText = this.changeUTFValues(encryptedText, this.encryptionKey);
        const finalText = encryptedText;
        return finalText;
    }
    startBlockEncoding(words) {
        let encryptedText = '';
        for (const word of words) {
            let encryptedNumbers = [];
            let wordCharSum = 0;
            for (let i = 0; i < word.length; i++) {
                const letter = word[i];
                const utf8Position = letter.charCodeAt(0);
                wordCharSum += utf8Position;
                const positionInWord = i + 1;
                const keyChar = this.encryptionKey[i % this.encryptionKey.length];
                const keyCharCode = keyChar.charCodeAt(0);
                const encryptedNumber = utf8Position + (keyCharCode * positionInWord);
                encryptedNumbers.push(encryptedNumber);
            }
            const phraseLength = word.length;
            let keySum = 0;
            for (let i = 0; i < this.encryptionKey.length; i++) {
                keySum += this.encryptionKey.charCodeAt(i);
            }
            const uniqueNumber = phraseLength * keySum + wordCharSum;
            const uniqueString = `x102jsd-${uniqueNumber}-ojn19`;
            const encryptedWord = encryptedNumbers.map(num => {
                const numStr = num.toFixed(6).padStart(10, '0');
                return numStr.split('').map((digit) => String.fromCharCode(digit.charCodeAt(0) + 48)).join('');
            }).join('');
            let finalEncryptedWord = '';
            for (let i = 0; i < encryptedWord.length; i += 3) {
                const block = encryptedWord.substring(i, i + 3);
                let modifiedBlock = '';
                for (let j = 0; j < block.length; j++) {
                    let utf8Value = block.charCodeAt(j);
                    let modifiedValue = utf8Value + uniqueNumber;
                    if (modifiedValue > 1114111) {
                        modifiedValue = utf8Value - uniqueNumber;
                    }
                    modifiedBlock += String.fromCharCode(modifiedValue);
                }
                finalEncryptedWord += modifiedBlock;
            }
            encryptedText += finalEncryptedWord + uniqueString + ' ';
        }
        return encryptedText;
    }
    changeUTFValues(text, encryptionKey) {
        let modifiedText = '';
        let keyCharSum = 0;
        for (let i = 0; i < encryptionKey.length; i++) {
            keyCharSum += encryptionKey.charCodeAt(i);
        }
        for (let i = 0; i < text.length; i++) {
            let utf8Value = text.charCodeAt(i);
            utf8Value += keyCharSum;
            if (utf8Value > 1114111) {
                utf8Value = utf8Value - 1114111;
            }
            if (utf8Value < 0) {
                utf8Value = 1114111 + utf8Value;
            }
            modifiedText += String.fromCharCode(utf8Value);
        }
        return modifiedText;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbmNyeXB0aW9uL2VuY3J5cHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUE7QUFFbEUsTUFBTSxPQUFPLGtCQUFrQjtJQUNuQixTQUFTLEdBQXNCLElBQUksaUJBQWlCLEVBQUUsQ0FBQTtJQUN0RCxpQkFBaUIsR0FBc0IsSUFBSSxpQkFBaUIsRUFBRSxDQUFBO0lBQzlELGFBQWEsR0FBVyxFQUFFLENBQUE7SUFFM0IsT0FBTyxDQUFDLEdBQVcsRUFBRSxZQUFvQjtRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQTtRQUN4QixNQUFNLG1CQUFtQixHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzVFLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDcEUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2xGLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDckMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xELGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQXVCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ2pGLE1BQU0sU0FBUyxHQUFXLGFBQWEsQ0FBQTtRQUV2QyxPQUFPLFNBQVMsQ0FBQTtJQUNwQixDQUFDO0lBRU8sa0JBQWtCLENBQUMsS0FBZTtRQUN0QyxJQUFJ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
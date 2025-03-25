import { BepCryptSeparator } from "../utils/separators.js";
export declare class BepCryptDecryption extends BepCryptSeparator {
    private separator;
    private specialCharacters;
    private encryptionKey;
    decrypt(key: string, text: string): string;
    private backUTFValues;
    private decryptText;
}

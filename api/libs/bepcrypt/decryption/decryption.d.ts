import { BepCryptSeparator } from "../utils/separators";
export declare class BepCryptDecryption extends BepCryptSeparator {
    private separator;
    private specialCharacters;
    private encryptionKey;
    decrypt(key: string, text: string): string;
    private backUTFValues;
    private decryptText;
}

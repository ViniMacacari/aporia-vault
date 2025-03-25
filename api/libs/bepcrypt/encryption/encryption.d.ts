export declare class BepCryptEncryption {
    private separator;
    private specialCharacters;
    private encryptionKey;
    encrypt(key: string, originalText: string): string;
    private startBlockEncoding;
    private changeUTFValues;
}

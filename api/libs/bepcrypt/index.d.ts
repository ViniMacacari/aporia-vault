export declare class BepCrypt {
    private encryption;
    private decryption;
    private fileConverter;
    encrypt(data: {
        privateKey: string;
        content: string;
    }): Promise<string>;
    decrypt(data: {
        privateKey: string;
        content: string;
    }): Promise<string>;
    fileEncrypt(data: {
        privateKey: string;
        filePath: string;
        fileName: string;
    }): Promise<any>;
    fileDecrypt(data: {
        privateKey: string;
        filePath: string;
        outputFileName: string;
    }): Promise<any>;
}

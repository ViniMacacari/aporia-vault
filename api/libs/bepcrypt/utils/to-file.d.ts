export declare class FileConverter {
    toBase64(filePath: string): Promise<string>;
    backToNormal(base64: string): Buffer;
    saveFile(content: string | Buffer, outputDir: string, fileName: string): Promise<string>;
}

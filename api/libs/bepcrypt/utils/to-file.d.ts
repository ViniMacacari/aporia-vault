export declare class FileConverter {
    toBase64(filePath: string): Promise<string>;
    backToNormal(base64: string): Buffer;
    saveFile(content: string | Buffer, outputPath: string): Promise<string>;
    readFile(path: string): Promise<string>;
}

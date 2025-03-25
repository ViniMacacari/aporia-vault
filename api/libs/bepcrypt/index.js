import { BepCryptEncryption } from "./encryption/encryption.js";
import { BepCryptDecryption } from "./decryption/decryption.js";
import { FileConverter } from "./utils/to-file.js";
import { BepCompressor } from "./compress/compressor.js";
export class BepCrypt {
    encryption = new BepCryptEncryption();
    decryption = new BepCryptDecryption();
    fileConverter = new FileConverter();
    compressor = new BepCompressor();
    async encrypt(data) {
        try {
            if (!data.privateKey || !data.content)
                throw 'Insufficient content for encryption';
            return this.encryption.encrypt(data.privateKey, data.content);
        }
        catch (error) {
            throw error;
        }
    }
    async decrypt(data) {
        try {
            if (!data.privateKey || !data.content)
                throw 'Insufficient content for decryption';
            return this.decryption.decrypt(data.privateKey, data.content);
        }
        catch (error) {
            throw error;
        }
    }
    async fileEncrypt(data) {
        try {
            let content = await this.fileConverter.toBase64(data.filePath);
            content = await this.encryption.encrypt(data.privateKey, content);
            content = await this.compressor.compress(content);
            const lastSlashIndex = data.filePath.lastIndexOf("/") !== -1 ? data.filePath.lastIndexOf("/") : data.filePath.lastIndexOf("\\");
            const dir = lastSlashIndex !== -1 ? data.filePath.substring(0, lastSlashIndex) : ".";
            const fileName = data.fileName || data.filePath.substring(lastSlashIndex + 1, data.filePath.lastIndexOf(".")) + ".bep";
            const outputFilePath = dir + "/" + fileName;
            return await this.fileConverter.saveFile(content, outputFilePath);
        }
        catch (error) {
            console.error("Error on file encryption:", error);
            throw error;
        }
    }
    async fileDecrypt(data) {
        try {
            let content = await this.fileConverter.readFile(data.filePath);
            content = await this.compressor.decompress(content);
            content = await this.decryption.decrypt(data.privateKey, content);
            const lastSlashIndex = data.filePath.lastIndexOf("/") !== -1 ? data.filePath.lastIndexOf("/") : data.filePath.lastIndexOf("\\");
            const dir = lastSlashIndex !== -1 ? data.filePath.substring(0, lastSlashIndex) : ".";
            const outputFilePath = dir + "/" + data.outputFileName;
            return await this.fileConverter.saveFile(content, outputFilePath);
        }
        catch (error) {
            console.error("Error on file decryption:", error);
            throw error;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUE7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUE7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQTtBQUV4RCxNQUFNLE9BQU8sUUFBUTtJQUNULFVBQVUsR0FBdUIsSUFBSSxrQkFBa0IsRUFBRSxDQUFBO0lBQ3pELFVBQVUsR0FBdUIsSUFBSSxrQkFBa0IsRUFBRSxDQUFBO0lBQ3pELGFBQWEsR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQTtJQUNsRCxVQUFVLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUE7SUFFdkQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUE2QztRQUN2RCxJQUFJLENBQUM7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUFFLE1BQU0scUNBQXFDLENBQUE7WUFFbEYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNqRSxDQUFDO1FBQUMsT0FBTyxLQUFVLEVBQUUsQ0FBQztZQUNsQixNQUFNLEtBQUssQ0FBQTtRQUNmLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUE2QztRQUN2RCxJQUFJLENBQUM7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUFFLE1BQU0scUNBQXFDLENBQUE7WUFFbEYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8s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
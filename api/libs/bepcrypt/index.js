"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BepCrypt = void 0;
const encryption_1 = require("./encryption/encryption");
const decryption_1 = require("./decryption/decryption");
const to_file_1 = require("./utils/to-file");
class BepCrypt {
    constructor() {
        this.encryption = new encryption_1.BepCryptEncryption();
        this.decryption = new decryption_1.BepCryptDecryption();
        this.fileConverter = new to_file_1.FileConverter();
    }
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
            return await this.fileConverter.saveFile(content, data.filePath, data.fileName + '.bep');
        }
        catch (error) {
            throw error;
        }
    }
    async fileDecrypt(data) {
        try {
            let content = await this.fileConverter.toBase64(data.filePath);
            content = await this.encryption.encrypt(data.privateKey, content);
            return await this.fileConverter.saveFile(content, data.filePath, data.outputFileName);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.BepCrypt = BepCrypt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0RBQTREO0FBQzVELHdEQUE0RDtBQUM1RCw2Q0FBK0M7QUFFL0MsTUFBYSxRQUFRO0lBQXJCO1FBQ1ksZUFBVSxHQUF1QixJQUFJLCtCQUFrQixFQUFFLENBQUE7UUFDekQsZUFBVSxHQUF1QixJQUFJLCtCQUFrQixFQUFFLENBQUE7UUFDekQsa0JBQWEsR0FBa0IsSUFBSSx1QkFBYSxFQUFFLENBQUE7SUF5QzlELENBQUM7SUF2Q0csS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUE2QztRQUN2RCxJQUFJLENBQUM7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUFFLE1BQU0scUNBQXFDLENBQUE7WUFFbEYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNqRSxDQUFDO1FBQUMsT0FBTyxLQUFVLEVBQUUsQ0FBQztZQUNsQixNQUFNLEtBQUssQ0FBQTtRQUNmLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUE2QztRQUN2RCxJQUFJLENBQUM7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUFFLE1BQU0scUNBQXFDLENBQUE7WUFFbEYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNqRSxDQUFDO1FBQUMsT0FBTyxLQUFVLEVBQUUsQ0FBQztZQUNsQixNQUFNLEtBQUssQ0FBQTtRQUNmLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFnRTtRQUM5RSxJQUFJLENBQUM7WUFDRCxJQUFJLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUM5RCxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQ2pFLE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFBO1FBQzVGLENBQUM7UUFBQyxPQUFPLEtBQVUsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sS0FBSyxDQUFBO1FBQ2YsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQXNFO1FBQ3BGLElBQUksQ0FBQztZQUNELElBQUksT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzlELE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUE7WUFDakUsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUN6RixDQUFDO1FBQUMsT0FBTyxLQUFVLEVBQUUsQ0FBQztZQUNsQixNQUFNLEtBQUssQ0FBQTtRQUNmLENBQUM7SUFDTCxDQUFDO0NBQ0o7QUE1Q0QsNEJBNENDIn0=
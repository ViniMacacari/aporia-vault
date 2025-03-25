"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileConverter = void 0;
const fs_1 = require("fs");
class FileConverter {
    async toBase64(filePath) {
        try {
            const fileBuffer = await fs_1.promises.readFile(filePath);
            return fileBuffer.toString("base64");
        }
        catch (error) {
            console.error("Error on converting file to Base64");
            throw error;
        }
    }
    backToNormal(base64) {
        try {
            return Buffer.from(base64, "base64");
        }
        catch (error) {
            console.error("Error on decoding Base64");
            throw error;
        }
    }
    async saveFile(content, outputDir, fileName) {
        try {
            if (outputDir) {
                await fs_1.promises.mkdir(outputDir, { recursive: true });
            }
            const outputFilePath = `${outputDir}/${fileName}`;
            const fileBuffer = typeof content === "string" ? Buffer.from(content, "utf-8") : content;
            await fs_1.promises.writeFile(outputFilePath, fileBuffer);
            return outputFilePath;
        }
        catch (error) {
            console.error("Error on save:", error);
            throw error;
        }
    }
}
exports.FileConverter = FileConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy90by1maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJCQUFtQztBQUVuQyxNQUFhLGFBQWE7SUFDdEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFnQjtRQUMzQixJQUFJLENBQUM7WUFDRCxNQUFNLFVBQVUsR0FBRyxNQUFNLGFBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDOUMsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3hDLENBQUM7UUFBQyxPQUFPLEtBQVUsRUFBRSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtZQUNuRCxNQUFNLEtBQUssQ0FBQTtRQUNmLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDO1lBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUN4QyxDQUFDO1FBQUMsT0FBTyxLQUFVLEVBQUUsQ0FBQztZQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUE7WUFDekMsTUFBTSxLQUFLLENBQUE7UUFDZixDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBd0IsRUFBRSxTQUFpQixFQUFFLFFBQWdCO1FBQ3hFLElBQUksQ0FBQztZQUNELElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQ1osTUFBTSxhQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1lBQ2xELENBQUM7WUFFRCxNQUFNLGNBQWMsR0FBRyxHQUFHLFNBQVMsSUFBSSxRQUFRLEVBQUUsQ0FBQTtZQUNqRCxNQUFNLFVBQVUsR0FBRyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUE7WUFDeEYsTUFBTSxhQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQTtZQUU5QyxPQUFPLGNBQWMsQ0FBQTtRQUN6QixDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDdEMsTUFBTSxLQUFLLENBQUE7UUFDZixDQUFDO0lBQ0wsQ0FBQztDQUNKO0FBcENELHNDQW9DQyJ9
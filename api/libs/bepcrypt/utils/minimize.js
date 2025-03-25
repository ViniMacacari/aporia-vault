"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinimizeValueEncryption = void 0;
class MinimizeValueEncryption {
    compress(text) {
        let result = '';
        let count = 1;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === text[i + 1]) {
                count++;
            }
            else {
                if (count > 5) {
                    result += `${text[i]}x0${count}x0`;
                }
                else {
                    result += text[i].repeat(count);
                }
                count = 1;
            }
        }
        return result;
    }
    decompress(compressedText) {
        const regex = /(.)x0(\d+)x0/g;
        let result = '';
        let lastIndex = 0;
        let match;
        while ((match = regex.exec(compressedText)) !== null) {
            const [fullMatch, char, count] = match;
            result += compressedText.slice(lastIndex, match.index);
            result += char.repeat(Number(count));
            lastIndex = match.index + fullMatch.length;
        }
        result += compressedText.slice(lastIndex);
        return result;
    }
}
exports.MinimizeValueEncryption = MinimizeValueEncryption;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaW1pemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvbWluaW1pemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSx1QkFBdUI7SUFDekIsUUFBUSxDQUFDLElBQVk7UUFDeEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ2YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBRWIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLEtBQUssRUFBRSxDQUFBO1lBQ1gsQ0FBQztpQkFBTSxDQUFDO2dCQUNKLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUNaLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQTtnQkFDdEMsQ0FBQztxQkFBTSxDQUFDO29CQUNKLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNuQyxDQUFDO2dCQUNELEtBQUssR0FBRyxDQUFDLENBQUE7WUFDYixDQUFDO1FBQ0wsQ0FBQztRQUVELE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7SUFFTSxVQUFVLENBQUMsY0FBc0I7UUFDcEMsTUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFBO1FBQzdCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNmLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQTtRQUVqQixJQUFJLEtBQTZCLENBQUE7UUFDakMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDbkQsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFBO1lBRXRDLE1BQU0sSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdEQsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7WUFDcEMsU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQTtRQUM5QyxDQUFDO1FBRUQsTUFBTSxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFekMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztDQUNKO0FBdkNELDBEQXVDQyJ9
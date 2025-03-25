export class MinimizeValueEncryption {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaW1pemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvbWluaW1pemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLHVCQUF1QjtJQUN6QixRQUFRLENBQUMsSUFBWTtRQUN4QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDZixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUE7UUFFYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDMUIsS0FBSyxFQUFFLENBQUE7WUFDWCxDQUFDO2lCQUFNLENBQUM7Z0JBQ0osSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ1osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFBO2dCQUN0QyxDQUFDO3FCQUFNLENBQUM7b0JBQ0osTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ25DLENBQUM7Z0JBQ0QsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUNiLENBQUM7UUFDTCxDQUFDO1FBRUQsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxjQUFzQjtRQUNwQyxNQUFNLEtBQUssR0FBRyxlQUFlLENBQUE7UUFDN0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ2YsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFBO1FBRWpCLElBQUksS0FBNkIsQ0FBQTtRQUNqQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNuRCxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUE7WUFFdEMsTUFBTSxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN0RCxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtZQUNwQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFBO1FBQzlDLENBQUM7UUFFRCxNQUFNLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUV6QyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO0NBQ0oifQ==
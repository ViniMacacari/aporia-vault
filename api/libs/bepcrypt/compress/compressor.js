"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BepCompressor = void 0;
class BepCompressor {
    compress(text) {
        if (!text || text.length === 0)
            return "";
        let dictionary = new Map();
        let nextCharCode = 0xE000;
        let buffer = "";
        let compressed = "";
        for (const char of text) {
            const pair = buffer + char;
            if (dictionary.has(pair)) {
                buffer = pair;
            }
            else {
                if (buffer) {
                    compressed += dictionary.get(buffer) || buffer;
                }
                const replacement = String.fromCharCode(nextCharCode++);
                dictionary.set(pair, replacement);
                buffer = char;
            }
        }
        if (buffer) {
            compressed += dictionary.get(buffer) || buffer;
        }
        return JSON.stringify({
            dict: [...dictionary.entries()],
            data: compressed
        });
    }
    decompress(compressed) {
        if (!compressed || compressed.length === 0)
            return "";
        const { dict, data } = JSON.parse(compressed);
        let dictionary = new Map(dict);
        let decompressed = "";
        for (const char of data) {
            decompressed += dictionary.has(char) ? dictionary.get(char) : char;
        }
        return decompressed;
    }
}
exports.BepCompressor = BepCompressor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHJlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wcmVzcy9jb21wcmVzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQWEsYUFBYTtJQUN0QixRQUFRLENBQUMsSUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFBO1FBRXpDLElBQUksVUFBVSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFBO1FBQzFDLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQTtRQUV6QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDZixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFFbkIsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN0QixNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBRTFCLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN2QixNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ2pCLENBQUM7aUJBQU0sQ0FBQztnQkFDSixJQUFJLE1BQU0sRUFBRSxDQUFDO29CQUNULFVBQVUsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQTtnQkFDbEQsQ0FBQztnQkFFRCxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUE7Z0JBQ3ZELFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFBO2dCQUNqQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ2pCLENBQUM7UUFDTCxDQUFDO1FBRUQsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNULFVBQVUsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQTtRQUNsRCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xCLElBQUksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUksRUFBRSxVQUFVO1NBQ25CLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLEVBQUUsQ0FBQTtRQUVyRCxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDN0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQWlCLElBQUksQ0FBQyxDQUFBO1FBRTlDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQTtRQUNyQixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3RCLFlBQVksSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDdEUsQ0FBQztRQUVELE9BQU8sWUFBWSxDQUFBO0lBQ3ZCLENBQUM7Q0FDSjtBQWpERCxzQ0FpREMifQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BepCryptSeparator = void 0;
class BepCryptSeparator {
    applySpaces(text) {
        return text.split(' ').map(word => {
            if (word.length > 12) {
                let separatedWord = word.slice(0, 11) + ' @bepspace@ ';
                let remainingPart = word.slice(11);
                while (remainingPart.length > 11) {
                    separatedWord += remainingPart.slice(0, 11) + ' @bepspace@ ';
                    remainingPart = remainingPart.slice(11);
                }
                return separatedWord + remainingPart;
            }
            return word;
        }).join(' ');
    }
    removeSpaces(text) {
        return text.replace(/\s*@bepspace@\s*|@bepspace@/g, '');
    }
    removeLines(text) {
        return text.replace(/(\r\n|\n|\r)/gm, ' @.bepline.@ ');
    }
    applyLines(text) {
        return text.replace(/\s*@\.bepline\.@\s*/g, '\n');
    }
}
exports.BepCryptSeparator = BepCryptSeparator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VwYXJhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9zZXBhcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQWEsaUJBQWlCO0lBQ25CLFdBQVcsQ0FBQyxJQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNuQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxjQUFjLENBQUE7Z0JBQ3RELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQ2xDLE9BQU8sYUFBYSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQztvQkFDL0IsYUFBYSxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQTtvQkFDNUQsYUFBYSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzNDLENBQUM7Z0JBQ0QsT0FBTyxhQUFhLEdBQUcsYUFBYSxDQUFBO1lBQ3hDLENBQUM7WUFDRCxPQUFPLElBQUksQ0FBQTtRQUNmLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNoQixDQUFDO0lBRU0sWUFBWSxDQUFDLElBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLDhCQUE4QixFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFFTSxXQUFXLENBQUMsSUFBWTtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUFZO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0NBQ0o7QUEzQkQsOENBMkJDIn0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialCharacters = void 0;
class SpecialCharacters {
    constructor() {
        this.specialCharactersMap = {
            '!': ' excbepcrypt ',
            '@': ' arbepcrypt ',
            '#': ' cerbepcrypt ',
            '$': ' dolbepcrypt ',
            '%': ' porbepcrypt ',
            '¨': ' trebepcrypt ',
            '&': ' ecbepcrypt ',
            '*': ' astbepcrypt ',
            '(': ' apbepcrypt ',
            ')': ' fpbepcrypt ',
            '-': ' hibepcrypt ',
            '=': ' igbepcrypt ',
            '+': ' mabepcrypt ',
            '`': ' crbepcrypt ',
            '´': ' acbepcrypt ',
            '{': ' achbepcrypt ',
            '}': ' fchbepcrypt ',
            '[': ' aclbepcrypt ',
            ']': ' fclbepcrypt ',
            '^': ' cfbepcrypt ',
            '~': ' tlbepcrypt ',
            ':': ' dobepcrypt ',
            ';': ' povbepcrypt ',
            '.': ' potbepcrypt ',
            ',': ' vibepcrypt ',
            '?': ' inbepcrypt ',
            '/': ' bfsepcrybe ',
            '\\': ' bbbepcrypt ',
            '|': ' brbepcrypt ',
            '\'': ' sqbepcrypt ',
            '"': ' aspbepcrypt ',
            '<': ' ltbepcrypt ',
            '>': ' gtbepcrypt '
        };
        this.specialCharactersMapReverse = {
            ' excbepcrypt ': '!',
            ' arbepcrypt ': '@',
            ' cerbepcrypt ': '#',
            ' dolbepcrypt ': '$',
            ' porbepcrypt ': '%',
            ' trebepcrypt ': '¨',
            ' ecbepcrypt ': '&',
            ' astbepcrypt ': '*',
            ' apbepcrypt ': '(',
            ' fpbepcrypt ': ')',
            ' hibepcrypt ': '-',
            ' igbepcrypt ': '=',
            ' mabepcrypt ': '+',
            ' crbepcrypt ': '`',
            ' acbepcrypt ': '´',
            ' achbepcrypt ': '{',
            ' fchbepcrypt ': '}',
            ' aclbepcrypt ': '[',
            ' fclbepcrypt ': ']',
            ' cfbepcrypt ': '^',
            ' tlbepcrypt ': '~',
            ' dobepcrypt ': ':',
            ' povbepcrypt ': ';',
            ' potbepcrypt ': '.',
            ' vibepcrypt ': ',',
            ' inbepcrypt ': '?',
            ' bfsepcrybe ': '/',
            ' bbbepcrypt ': '\\',
            ' brbepcrypt ': '|',
            ' sqbepcrypt ': '\'',
            ' aspbepcrypt ': '"',
            ' ltbepcrypt ': '<',
            ' gtbepcrypt ': '>'
        };
    }
    replaceSpecialCharacters(text) {
        return text.replace(/[!@#$%¨&*()\-+=`´{\[\}\]^~:.,?\/\\|'"<>]/g, char => this.specialCharactersMap[char]);
    }
    backToNormal(text) {
        for (const [placeholder, char] of Object.entries(this.specialCharactersMapReverse)) {
            const escapedPlaceholder = placeholder.replace(/ /g, '\\s*');
            const regex = new RegExp(escapedPlaceholder, 'g');
            text = text.replace(regex, char);
        }
        return text;
    }
}
exports.SpecialCharacters = SpecialCharacters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lhbC1jaGFyYWN0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3NwZWNpYWwtY2hhcmFjdGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxNQUFhLGlCQUFpQjtJQUE5QjtRQUNJLHlCQUFvQixHQUF5QjtZQUN6QyxHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsY0FBYztZQUNuQixJQUFJLEVBQUUsY0FBYztZQUNwQixHQUFHLEVBQUUsY0FBYztZQUNuQixJQUFJLEVBQUUsY0FBYztZQUNwQixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsY0FBYztTQUN0QixDQUFBO1FBRUQsZ0NBQTJCLEdBQXlCO1lBQ2hELGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1lBQ25CLGNBQWMsRUFBRSxHQUFHO1NBQ3RCLENBQUE7SUFjTCxDQUFDO0lBWlUsd0JBQXdCLENBQUMsSUFBWTtRQUN4QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsMkNBQTJDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUM3RyxDQUFDO0lBRU0sWUFBWSxDQUFDLElBQVk7UUFDNUIsS0FBSyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEVBQUUsQ0FBQztZQUNqRixNQUFNLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQzVELE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ2pELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNwQyxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0NBQ0o7QUFyRkQsOENBcUZDIn0=
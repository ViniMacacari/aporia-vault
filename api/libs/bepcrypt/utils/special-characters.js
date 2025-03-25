export class SpecialCharacters {
    specialCharactersMap = {
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
    specialCharactersMapReverse = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lhbC1jaGFyYWN0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3NwZWNpYWwtY2hhcmFjdGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLE9BQU8saUJBQWlCO0lBQzFCLG9CQUFvQixHQUF5QjtRQUN6QyxHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsY0FBYztRQUNuQixJQUFJLEVBQUUsY0FBYztRQUNwQixHQUFHLEVBQUUsY0FBYztRQUNuQixJQUFJLEVBQUUsY0FBYztRQUNwQixHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsY0FBYztLQUN0QixDQUFBO0lBRUQsMkJBQTJCLEdBQXlCO1FBQ2hELGVBQWUsRUFBRSxHQUFHO1FBQ3BCLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGVBQWUsRUFBRSxHQUFHO1FBQ3BCLGVBQWUsRUFBRSxHQUFHO1FBQ3BCLGVBQWUsRUFBRSxHQUFHO1FBQ3BCLGVBQWUsRUFBRSxHQUFHO1FBQ3BCLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGVBQWUsRUFBRSxHQUFHO1FBQ3BCLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGVBQWUsRUFBRSxHQUFHO1FBQ3BCLGVBQWUsRUFBRSxHQUFHO1FBQ3BCLGVBQWUsRUFBRSxHQUFHO1FBQ3BCLGVBQWUsRUFBRSxHQUFHO1FBQ3BCLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGVBQWUsRUFBRSxHQUFHO1FBQ3BCLGVBQWUsRUFBRSxHQUFHO1FBQ3BCLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxJQUFJO1FBQ3BCLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxJQUFJO1FBQ3BCLGVBQWUsRUFBRSxHQUFHO1FBQ3BCLGNBQWMsRUFBRSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxHQUFHO0tBQ3RCLENBQUE7SUFFTSx3QkFBd0IsQ0FBQyxJQUFZO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQywyQ0FBMkMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQzdHLENBQUM7SUFFTSxZQUFZLENBQUMsSUFBWTtRQUM1QixLQUFLLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsRUFBRSxDQUFDO1lBQ2pGLE1BQU0sa0JBQWtCLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDNUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDakQsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3BDLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7Q0FDSiJ9
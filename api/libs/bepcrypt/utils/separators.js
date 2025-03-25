export class BepCryptSeparator {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VwYXJhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9zZXBhcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxpQkFBaUI7SUFDbkIsV0FBVyxDQUFDLElBQVk7UUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQ25CLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQTtnQkFDdEQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDbEMsT0FBTyxhQUFhLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDO29CQUMvQixhQUFhLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFBO29CQUM1RCxhQUFhLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDM0MsQ0FBQztnQkFDRCxPQUFPLGFBQWEsR0FBRyxhQUFhLENBQUE7WUFDeEMsQ0FBQztZQUNELE9BQU8sSUFBSSxDQUFBO1FBQ2YsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2hCLENBQUM7SUFFTSxZQUFZLENBQUMsSUFBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUVNLFdBQVcsQ0FBQyxJQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRU0sVUFBVSxDQUFDLElBQVk7UUFDMUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JELENBQUM7Q0FDSiJ9
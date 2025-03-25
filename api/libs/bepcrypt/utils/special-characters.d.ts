interface SpecialCharactersMap {
    [key: string]: string;
}
export declare class SpecialCharacters {
    specialCharactersMap: SpecialCharactersMap;
    specialCharactersMapReverse: SpecialCharactersMap;
    replaceSpecialCharacters(text: string): string;
    backToNormal(text: string): string;
}
export {};

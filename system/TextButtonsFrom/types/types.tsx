// transformations.types.ts

// Define the type for a transformation
export interface Transformation {
    name: string;
    transform: (text: string) => string;
  }
  
  // Define the type for the Roman numeral function
  export type ToRomanNumeral = (num: number) => string;
  
  // Define the Morse code mapping
  export type MorseCodeMap = { [key: string]: string };
  
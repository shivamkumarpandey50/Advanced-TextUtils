import { Transformation, ToRomanNumeral, MorseCodeMap } from "@/types/types";

const morseCode: MorseCodeMap = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..", " ": "/"
};

const toRomanNumeral: ToRomanNumeral = (num) => {
  const romanNumerals: { [key: string]: number } = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
    L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
  };
  let roman = "";
  for (const key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      roman += key;
      num -= romanNumerals[key];
    }
  }
  return roman;
};

export const transformations: Transformation[] = [
  { name: "UPPERCASE", transform: (text) => text.toUpperCase() },
  { name: "lowercase", transform: (text) => text.toLowerCase() },
  {
    name: "Capitalize",
    transform: (text) =>
      text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" "),
  },
  { name: "Reverse", transform: (text) => text.split("").reverse().join("") },
  { name: "Remove Spaces", transform: (text) => text.replace(/\s+/g, "") },
  { name: "Add Line Breaks", transform: (text) => text.replace(/\./g, ".\n") },
  { name: "Remove Numbers", transform: (text) => text.replace(/[0-9]/g, "") },
  { name: "Remove Special Chars", transform: (text) => text.replace(/[^a-zA-Z0-9\s]/g, "") },
  { name: "Snake Case", transform: (text) => text.toLowerCase().replace(/\s+/g, "_") },
  { name: "Kebab Case", transform: (text) => text.toLowerCase().replace(/\s+/g, "-") },
  {
    name: "Camel Case",
    transform: (text) =>
      text
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) =>
          index === 0 ? letter.toLowerCase() : letter.toUpperCase()
        )
        .replace(/\s+/g, ""),
  },
  {
    name: "Alternating Case",
    transform: (text) =>
      text
        .split("")
        .map((char, i) => (i % 2 ? char.toLowerCase() : char.toUpperCase()))
        .join(""),
  },
  {
    name: "Title Case",
    transform: (text) =>
      text.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      ),
  },
  { name: "Remove Extra Spaces", transform: (text) => text.replace(/\s+/g, " ").trim() },
  {
    name: "Count Words",
    transform: (text) =>
      `Word Count: ${text.trim().split(/\s+/).filter((word) => word.length > 0).length}`,
  },
  { name: "Count Characters", transform: (text) => `Character Count: ${text.length}` },
  { name: "Reverse Words", transform: (text) => text.split(" ").reverse().join(" ") },
  { name: "Sort Lines", transform: (text) => text.split("\n").sort().join("\n") },
  { name: "Sort Words", transform: (text) => text.split(" ").sort().join(" ") },
  { name: "Remove Duplicates", transform: (text) => [...new Set(text.split(" "))].join(" ") },
  { name: "Base64 Encode", transform: (text) => btoa(text) },
  {
    name: "ROT13",
    transform: (text) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const code = char.charCodeAt(0);
        const isUpperCase = char <= "Z";
        const limit = isUpperCase ? 90 : 122;
        const newCode = code + 13;
        return String.fromCharCode(newCode <= limit ? newCode : newCode - 26);
      }),
  },
  {
    name: "Morse Code",
    transform: (text) =>
      text
        .toUpperCase()
        .split("")
        .map((char) => morseCode[char] || char)
        .join(" "),
  },
  {
    name: "Binary",
    transform: (text) =>
      text
        .split("")
        .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" "),
  },
  {
    name: "Reverse Each Word",
    transform: (text) =>
      text
        .split(" ")
        .map((word) => word.split("").reverse().join(""))
        .join(" "),
  },
  { name: "Remove Vowels", transform: (text) => text.replace(/[aeiou]/gi, "") },
  { name: "Remove Consonants", transform: (text) => text.replace(/[bcdfghjklmnpqrstvwxyz]/gi, "") },
  { name: "Repeat Text", transform: (text) => `${text} ${text}` },
  { name: "Add Quotes", transform: (text) => `"${text}"` },
  { name: "Add Parentheses", transform: (text) => `(${text})` },
  {
    name: "Pascal Case",
    transform: (text) =>
      text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(""),
  },
  { name: "Dot Case", transform: (text) => text.toLowerCase().replace(/\s+/g, ".") },
  { name: "Path Case", transform: (text) => text.toLowerCase().replace(/\s+/g, "/") },
  { name: "Constant Case", transform: (text) => text.toUpperCase().replace(/\s+/g, "_") },
  {
    name: "Slug Case",
    transform: (text) =>
      text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, ""),
  },
  {
    name: "Numbers to Roman",
    transform: (text) =>
      text.replace(/\d+/g, (match) => toRomanNumeral(parseInt(match))),
  },
  {
    name: "Add Bullet Points",
    transform: (text) =>
      text
        .split("\n")
        .map((line) => `• ${line}`)
        .join("\n"),
  },
  {
    name: "Add Line Numbers",
    transform: (text) =>
      text
        .split("\n")
        .map((line, i) => `${i + 1}. ${line}`)
        .join("\n"),
  },
  { name: "Wrap in HTML Tags", transform: (text) => `<div>${text}</div>` },
  { name: "JSON Stringify", transform: (text) => JSON.stringify({ text }, null, 2) },
  { name: "URL Encode", transform: (text) => encodeURIComponent(text) },
  { name: "URL Decode", transform: (text) => decodeURIComponent(text) },
  {
    name: "Hexadecimal",
    transform: (text) =>
      text
        .split("")
        .map((char) => char.charCodeAt(0).toString(16))
        .join(" "),
  },
  {
    name: "Count Sentences",
    transform: (text) =>
      `Sentence Count: ${text.split(/[.!?]+/).filter(Boolean).length}`,
  },
  {
    name: "Count Paragraphs",
    transform: (text) =>
      `Paragraph Count: ${text.split("\n\n").filter(Boolean).length}`,
  },
  {
    name: "Hash Text (Simple)",
    transform: (text) =>
      text
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0)
        .toString(16),
  },
  {
    name: "Reverse Sentences",
    transform: (text) =>
      text
        .split(/([.!?]+)/)
        .map((part, i) =>
          i % 2 === 0 ? part.split(" ").reverse().join(" ") : part
        )
        .join(""),
  },
  {
    name: "Random Case",
    transform: (text) =>
      text
        .split("")
        .map((char) =>
          Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
        )
        .join(""),
  },
  {
    name: "Emoji Numbers",
    transform: (text) =>
      text.replace(/\d/g, (d) => {
        const emojiNumbers = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
        return emojiNumbers[parseInt(d, 10)];
      }),
  },
  {
    name: "Letter Count",
    transform: (text) => `Letter Count: ${text.replace(/[^a-zA-Z]/g, "").length}`,
  },
];
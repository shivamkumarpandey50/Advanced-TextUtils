"use client";

import { useState } from "react";
import { TextAnalyzer } from "./TextAnalyzer";
import { KeywordExtractor } from "./KeywordExtractor";
import { PlagiarismChecker } from "./PlagiarismChecker";
import { Transformation, ToRomanNumeral, MorseCodeMap } from "../types/types";
import {
  Copy,
  RotateCcw,
  Check,
  ArrowUpDown,
  Type,
  Hash,
  AlignLeft,
  Sparkles,
  Code,
} from "lucide-react";

export const TextUtils = () => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

  const transformations: Transformation[] = [
    { name: "UPPERCASE", transform: (text) => text.toUpperCase() },
    { name: "lowercase", transform: (text) => text.toLowerCase() },
    {
      name: "Capitalize",
      transform: (text) =>
        text
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" ")
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
          .replace(/\s+/g, "")
    },
    {
      name: "Alternating Case",
      transform: (text) =>
        text
          .split("")
          .map((char, i) => (i % 2 ? char.toLowerCase() : char.toUpperCase()))
          .join("")
    },
    {
      name: "Title Case",
      transform: (text) =>
        text.replace(
          /\w\S*/g,
          (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        )
    },
    { name: "Remove Extra Spaces", transform: (text) => text.replace(/\s+/g, " ").trim() },
    {
      name: "Count Words",
      transform: (text) =>
        `Word Count: ${text.trim().split(/\s+/).filter((word) => word.length > 0).length}`
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
        })
    },
    {
      name: "Morse Code",
      transform: (text) =>
        text
          .toUpperCase()
          .split("")
          .map((char) => morseCode[char] || char)
          .join(" ")
    },
    {
      name: "Binary",
      transform: (text) =>
        text
          .split("")
          .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
          .join(" ")
    },
    {
      name: "Reverse Each Word",
      transform: (text) =>
        text
          .split(" ")
          .map((word) => word.split("").reverse().join(""))
          .join(" ")
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
          .join("")
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
          .replace(/[^\w-]+/g, "")
    },
    {
      name: "Numbers to Roman",
      transform: (text) =>
        text.replace(/\d+/g, (match) => toRomanNumeral(parseInt(match)))
    },
    {
      name: "Add Bullet Points",
      transform: (text) =>
        text
          .split("\n")
          .map((line) => `• ${line}`)
          .join("\n")
    },
    {
      name: "Add Line Numbers",
      transform: (text) =>
        text
          .split("\n")
          .map((line, i) => `${i + 1}. ${line}`)
          .join("\n")
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
          .join(" ")
    },
    {
      name: "Count Sentences",
      transform: (text) =>
        `Sentence Count: ${text.split(/[.!?]+/).filter(Boolean).length}`
    },
    {
      name: "Count Paragraphs",
      transform: (text) =>
        `Paragraph Count: ${text.split("\n\n").filter(Boolean).length}`
    },
    {
      name: "Hash Text (Simple)",
      transform: (text) =>
        text
          .split("")
          .reduce((acc, char) => acc + char.charCodeAt(0), 0)
          .toString(16)
    },
    {
      name: "Reverse Sentences",
      transform: (text) =>
        text
          .split(/([.!?]+)/)
          .map((part, i) =>
            i % 2 === 0 ? part.split(" ").reverse().join(" ") : part
          )
          .join("")
    },
    {
      name: "Random Case",
      transform: (text) =>
        text
          .split("")
          .map((char) =>
            Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
          )
          .join("")
    },
    {
      name: "Emoji Numbers",
      transform: (text) =>
        text.replace(/\d/g, (d) => {
          const emojiNumbers = [
            "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣",
            "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"
          ];
          return emojiNumbers[parseInt(d, 10)];
        })
    },
    {
      name: "Letter Count",
      transform: (text) =>
        `Letter Count: ${text.replace(/[^a-zA-Z]/g, "").length}`
    }
  ];

  const buttonVariants = [
    "bg-blue-500 hover:bg-blue-600",
    "bg-green-500 hover:bg-green-600",
    "bg-purple-500 hover:bg-purple-600",
    "bg-pink-500 hover:bg-pink-600",
    "bg-indigo-500 hover:bg-indigo-600",
    "bg-teal-500 hover:bg-teal-600",
    "bg-orange-500 hover:bg-orange-600",
    "bg-red-500 hover:bg-red-600"
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <Type className="w-8 h-8" />
            Text Utilities
            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              50+ Tools
            </span>
          </h1>

          <div className="mb-6 relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text here..."
              className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => setText("")}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
                title="Clear"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button
                onClick={handleCopy}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <TextAnalyzer text={text} />
          <KeywordExtractor text={text} />
          <PlagiarismChecker text={text} />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {transformations.map((transform, index) => (
              <button
                key={transform.name}
                onClick={() => setText(transform.transform(text))}
                className={`${
                  buttonVariants[index % buttonVariants.length]
                } text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm hover:shadow-md`}
              >
                {index % 5 === 0 && <ArrowUpDown className="w-4 h-4" />}
                {index % 5 === 1 && <Hash className="w-4 h-4" />}
                {index % 5 === 2 && <AlignLeft className="w-4 h-4" />}
                {index % 5 === 3 && <Code className="w-4 h-4" />}
                {index % 5 === 4 && <Sparkles className="w-4 h-4" />}
                {transform.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
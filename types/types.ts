export interface Transformation {
  name: string;
  transform: (text: string) => string;
}

export interface ToRomanNumeral {
  (num: number): string;
}

export interface MorseCodeMap {
  [key: string]: string;
}

export interface TextAnalysis {
  wordCount: number;
  charCount: number;
  sentenceCount: number;
  readingTime: number;
  readabilityScore: number;
}

export interface KeywordExtractionResult {
  keyword: string;
  frequency: number;
  relevance: number;
}

export interface PlagiarismResult {
  similarity: number;
  matches: Array<{
    text: string;
    similarity: number;
  }>;
}
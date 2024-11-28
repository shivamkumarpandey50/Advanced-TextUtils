"use client";

import { useState } from "react";
import { TextAnalyzer } from "../TextAnalyzer";
import { KeywordExtractor } from "../KeywordExtractor";
import { PlagiarismChecker } from "../PlagiarismChecker";
import { transformations } from "./transformations";
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

  const buttonVariants = [
    "bg-blue-500 hover:bg-blue-600",
    "bg-green-500 hover:bg-green-600",
    "bg-purple-500 hover:bg-purple-600",
    "bg-pink-500 hover:bg-pink-600",
    "bg-indigo-500 hover:bg-indigo-600",
    "bg-teal-500 hover:bg-teal-600",
    "bg-orange-500 hover:bg-orange-600",
    "bg-red-500 hover:bg-red-600",
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
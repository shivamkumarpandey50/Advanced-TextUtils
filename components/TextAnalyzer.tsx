"use client";

import { useState, useEffect } from 'react';
import { TextAnalysis } from '../types/types';
import { analyzeText } from '../utils/textAnalysis';
import { BarChart, Clock, BookOpen } from 'lucide-react';

interface TextAnalyzerProps {
  text: string;
}

export const TextAnalyzer = ({ text }: TextAnalyzerProps) => {
  const [analysis, setAnalysis] = useState<TextAnalysis | null>(null);

  useEffect(() => {
    setAnalysis(analyzeText(text));
  }, [text]);

  if (!analysis) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 text-blue-600 mb-2">
          <BarChart className="w-5 h-5" />
          <h3 className="font-semibold">Text Statistics</h3>
        </div>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Words: {analysis.wordCount}</p>
          <p>Characters: {analysis.charCount}</p>
          <p>Sentences: {analysis.sentenceCount}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 text-green-600 mb-2">
          <Clock className="w-5 h-5" />
          <h3 className="font-semibold">Reading Time</h3>
        </div>
        <p className="text-2xl font-bold text-gray-700">
          {analysis.readingTime} min
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 text-purple-600 mb-2">
          <BookOpen className="w-5 h-5" />
          <h3 className="font-semibold">Readability</h3>
        </div>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                Score: {Math.round(analysis.readabilityScore)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
            <div
              style={{ width: `${analysis.readabilityScore}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
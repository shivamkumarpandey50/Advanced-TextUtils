"use client";

import { useState, useEffect } from 'react';
import { KeywordExtractionResult } from '../types/types';
import { extractKeywords } from '../utils/textAnalysis';
import { Tag } from 'lucide-react';

interface KeywordExtractorProps {
  text: string;
}

export const KeywordExtractor = ({ text }: KeywordExtractorProps) => {
  const [keywords, setKeywords] = useState<KeywordExtractionResult[]>([]);

  useEffect(() => {
    setKeywords(extractKeywords(text));
  }, [text]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex items-center gap-2 text-indigo-600 mb-4">
        <Tag className="w-5 h-5" />
        <h3 className="font-semibold">Key Terms</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <div
            key={keyword.keyword}
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: `hsla(${index * 36}, 70%, 95%, 1)`,
              color: `hsla(${index * 36}, 70%, 35%, 1)`,
            }}
          >
            {keyword.keyword}
            <span className="ml-1 opacity-60">({keyword.frequency})</span>
          </div>
        ))}
      </div>
    </div>
  );
};
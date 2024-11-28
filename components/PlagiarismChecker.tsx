"use client";

import { useState } from 'react';
import { PlagiarismResult } from '../types/types';
import { checkPlagiarism } from '../utils/textAnalysis';
import { AlertTriangle, Search } from 'lucide-react';

interface PlagiarismCheckerProps {
  text: string;
}

export const PlagiarismChecker = ({ text }: PlagiarismCheckerProps) => {
  const [result, setResult] = useState<PlagiarismResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    setLoading(true);
    try {
      const plagiarismResult = await checkPlagiarism(text);
      setResult(plagiarismResult);
    } catch (error) {
      console.error('Error checking plagiarism:', error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-orange-600">
          <Search className="w-5 h-5" />
          <h3 className="font-semibold">Plagiarism Check</h3>
        </div>
        <button
          onClick={handleCheck}
          disabled={loading || !text}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${loading || !text
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
            }`}
        >
          {loading ? 'Checking...' : 'Check Now'}
        </button>
      </div>

      {result && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className={`w-5 h-5 ${
              result.similarity > 0.4 ? 'text-red-500' : 'text-green-500'
            }`} />
            <span className="font-medium">
              {Math.round(result.similarity * 100)}% similar to existing content
            </span>
          </div>

          {result.matches.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Potential Matches:</h4>
              {result.matches.map((match, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-gray-50 text-sm text-gray-600"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-700">
                      Match {index + 1}
                    </span>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                      {Math.round(match.similarity * 100)}% similar
                    </span>
                  </div>
                  <p>{match.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
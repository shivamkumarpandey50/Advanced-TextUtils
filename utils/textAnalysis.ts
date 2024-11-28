export const analyzeText = (text: string): TextAnalysis => {
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  const sentences = text.split(/[.!?]+/).filter(Boolean);
  
  // Calculate reading time (assuming 200 words per minute)
  const readingTime = Math.ceil(words.length / 200);
  
  // Simple readability score based on average word length
  const avgWordLength = words.reduce((sum, word) => sum + word.length, 0) / words.length;
  const readabilityScore = Math.max(0, Math.min(100, 100 - (avgWordLength - 4) * 10));

  return {
    wordCount: words.length,
    charCount: text.length,
    sentenceCount: sentences.length,
    readingTime,
    readabilityScore
  };
};

export const extractKeywords = (text: string): KeywordExtractionResult[] => {
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2);

  const stopWords = new Set(['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'with']);
  
  const frequency: { [key: string]: number } = {};
  words.forEach(word => {
    if (!stopWords.has(word)) {
      frequency[word] = (frequency[word] || 0) + 1;
    }
  });

  return Object.entries(frequency)
    .map(([keyword, count]) => ({
      keyword,
      frequency: count,
      relevance: count / words.length
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 10);
};

export const checkPlagiarism = async (text: string): Promise<PlagiarismResult> => {
  // Simulated plagiarism check using text similarity
  const sentences = text.split(/[.!?]+/).filter(Boolean);
  
  // In a real implementation, this would call an API or database
  const simulatedMatches = sentences.map(sentence => ({
    text: sentence,
    similarity: Math.random() * 0.5 // Simulated similarity score
  })).filter(match => match.similarity > 0.3);

  const overallSimilarity = simulatedMatches.reduce(
    (sum, match) => sum + match.similarity, 
    0
  ) / Math.max(1, simulatedMatches.length);

  return {
    similarity: overallSimilarity,
    matches: simulatedMatches
  };
};
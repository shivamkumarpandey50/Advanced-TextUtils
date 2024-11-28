"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const features = [
  {
    title: "Text Case Conversion",
    description: "Convert text between different cases: uppercase, lowercase, title case, and more.",
    items: ["UPPERCASE", "lowercase", "Title Case", "camelCase", "snake_case"]
  },
  {
    title: "Text Analysis",
    description: "Get detailed insights about your text with our analysis tools.",
    items: ["Word Count", "Character Count", "Reading Time", "Keyword Extraction"]
  },
  {
    title: "Text Formatting",
    description: "Format your text exactly how you want it.",
    items: ["Remove Extra Spaces", "Add Line Breaks", "Sort Lines", "Add Numbers"]
  },
  {
    title: "Text Encoding",
    description: "Convert text between different encoding formats.",
    items: ["Base64", "URL Encode", "HTML Encode", "Morse Code"]
  }
];

export default function FeaturesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Features</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover the powerful text manipulation tools at your fingertips
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => router.push("/tools")}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Try All Features <ArrowRight className="ml-2" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
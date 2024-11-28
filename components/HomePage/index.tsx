"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Type,
  Copy,
  Scissors,
  AlignCenter,
  RotateCcw,
  FileText,
  ArrowRight,
  Waves,
} from "lucide-react";
import { TextFeatureCard } from "./TextFeatureCard";
import { AnimatedBackground } from "./AnimatedBackground";

const textFeatures = [
  {
    icon: <Type size={40} />,
    title: "Text Case Converter",
    description:
      "Convert text to uppercase, lowercase, or title case with a single click.",
  },
  {
    icon: <Copy size={40} />,
    title: "Text Copy",
    description: "Easy copy-to-clipboard functionality for processed text.",
  },
  {
    icon: <Scissors size={40} />,
    title: "Text Trimmer",
    description: "Remove extra spaces and clean up your text effortlessly.",
  },
  {
    icon: <AlignCenter size={40} />,
    title: "Text Alignment",
    description: "Align your text left, right, or center with ease.",
  },
  {
    icon: <RotateCcw size={40} />,
    title: "Text Reverser",
    description: "Quickly reverse your entire text or word by word.",
  },
  {
    icon: <FileText size={40} />,
    title: "Word Counter",
    description:
      "Get instant statistics about your text, including word and character count.",
  },
];

export const HomePage = () => {
  // const [inputText, setInputText] = useState("");
  // const [processedText, setProcessedText] = useState("");
  const router = useRouter();

  // const handleTextProcess = () => {
  //   setProcessedText(inputText.toUpperCase());
  // };

  const handleGetStarted = () => {
    router.push("/tools");
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <div className="text-white py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center relative">
            <Waves className="absolute top-0 left-0 w-full h-full opacity-10" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">
              TextUtils: Your Text Transformation Companion
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto relative z-10">
              Powerful online tools to manipulate, analyze, and enhance your
              text with simplicity and speed.
            </p>
          </div>
          <div className=" py-16">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Ready to Transform Your Text?
              </h3>
              <p className="text-xl text-white mb-8">
                Start using TextUtils now and experience the power of effortless
                text manipulation.
              </p>
              <button
                onClick={handleGetStarted}
                className="bg-black text-white px-8 py-3 rounded-full text-lg transition-colors inline-flex items-center"
              >
                Get Started <ArrowRight className="ml-2" size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Explore Our Text Utility Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {textFeatures.map((feature, index) => (
              <TextFeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 TextUtils. All Rights Reserved.</p>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes bubble {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) scale(1.5);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation: bubble linear infinite;
        }
      `}</style>
    </div>
  );
};

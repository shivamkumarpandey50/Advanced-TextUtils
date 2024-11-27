import React, { useState, useEffect } from "react";
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

interface TextFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BubbleProps {
  id: number;
  size: number;
  left: number;
  animationDuration: number;
  delay: number;
}

const TextFeatureCard: React.FC<TextFeature> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AnimatedBackground: React.FC = () => {
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: BubbleProps[] = Array.from({ length: 20 }).map(
        (_, index) => ({
          id: index,
          size: Math.random() * 100 + 20,
          left: Math.random() * 100,
          animationDuration: Math.random() * 10 + 5,
          delay: Math.random() * 5,
        })
      );
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bg-blue-500/20 rounded-full animate-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.animationDuration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const HomePage: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [processedText, setProcessedText] = useState<string>("");

  const textFeatures: TextFeature[] = [
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

  const handleTextProcess = () => {
    setProcessedText(inputText.toUpperCase());
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
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

            {/* Interactive Text Processor */}
            <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden relative z-10">
              <textarea
                className="w-full p-4 text-gray-800 resize-y min-h-[150px] bg-transparent"
                placeholder="Enter your text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <div className="bg-gray-100/50 p-4 flex items-center">
                <button
                  onClick={handleTextProcess}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center hover:bg-blue-700 transition-colors"
                >
                  Process Text <ArrowRight className="ml-2" size={20} />
                </button>
                {processedText && (
                  <div className="ml-4 flex-grow">
                    <strong>Processed Result:</strong>
                    <p className="text-gray-700 truncate">{processedText}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Explore Our Text Utility Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {textFeatures.map((feature, index) => (
              <TextFeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Ready to Transform Your Text?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Start using TextUtils now and experience the power of effortless
              text manipulation.
            </p>
            <a
              // href="/text-tools"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Get Started <ArrowRight className="ml-2" size={24} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 TextUtils. All Rights Reserved.</p>
          </div>
        </footer>
      </div>

      {/* Tailwind CSS Custom Animations */}
      <style>{`
        @keyframes bubble {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
        }
        .animate-bubble {
          animation: bubble linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;

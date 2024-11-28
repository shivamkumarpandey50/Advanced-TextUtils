"use client";

import { Book, Users, Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About TextUtils</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Empowering users with powerful text manipulation tools since 2024
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide accessible, efficient, and powerful text manipulation tools for everyone,
              making text processing tasks simpler and more productive.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Book className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-600">
              Started as a simple text converter, TextUtils has grown into a comprehensive suite
              of text manipulation tools, serving users worldwide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Community</h3>
            <p className="text-gray-600">
              Join thousands of users who trust TextUtils for their daily text processing needs,
              from simple case conversion to complex text analysis.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose TextUtils?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">50+ Text Tools</h3>
                <p className="text-gray-600">
                  Access a comprehensive suite of text manipulation tools in one place.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Real-time Processing</h3>
                <p className="text-gray-600">
                  See results instantly as you type, with no delay or page reloads.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">User-Friendly Interface</h3>
                <p className="text-gray-600">
                  Clean, intuitive design that makes text manipulation a breeze.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Privacy First</h3>
                <p className="text-gray-600">
                  All processing happens in your browser. Your text never leaves your device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
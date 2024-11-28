"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export const ReadyToTransformSection = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    console.log("Button was clicked!"); // Log to verify
    alert("Navigating to /tools"); // Alert to test
    router.push("/tools"); // Perform navigation
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">
          Ready to Transform Your Text?
        </h3>
        <p className="text-xl text-white mb-8">
          Start using TextUtils now and experience the power of effortless text
          manipulation.
        </p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

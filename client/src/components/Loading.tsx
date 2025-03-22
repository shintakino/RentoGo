import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/60 z-50">
      <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/80 shadow-soft backdrop-blur-sm">
        {/* Loader Animation */}
        <div className="relative">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary-100" />
          {/* Spinning inner ring */}
          <Loader2 className="w-12 h-12 animate-spin text-primary-600" />
        </div>
        
        {/* Loading Text with Animated Dots */}
        <div className="flex items-center gap-1">
          <span className="text-base font-medium bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
            Loading
          </span>
          <span className="flex gap-0.5">
            <span className="w-1 h-1 rounded-full bg-primary-600 animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1 h-1 rounded-full bg-primary-600 animate-bounce [animation-delay:-0.2s]" />
            <span className="w-1 h-1 rounded-full bg-primary-600 animate-bounce [animation-delay:-0.1s]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loading;

// Optional: Add this to your globals.css for custom animation
/*
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
*/

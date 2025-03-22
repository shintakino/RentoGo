import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Header = ({ title, subtitle, className }: HeaderProps) => {
  return (
    <div className={cn("mb-8 relative", className)}>
      {/* Decorative element */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full" />
      
      <div className="pl-4">
        <h1 className="text-3xl font-display font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-base text-gray-600 mt-2 font-sans leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;

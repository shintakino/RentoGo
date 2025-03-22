import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Container = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        "py-8 space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
}; 
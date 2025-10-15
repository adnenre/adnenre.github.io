import LanguageSwitcher from "@/components/navigation/LanguageSwitcher";
import { motion } from "framer-motion";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navigation() {
  return (
    <motion.header
      className=" z-50 w-screen  top-0 left-0 right-0  backdrop-blur-xs bg-background/30 border-b border-gray-200/10  fixed"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
    >
      <div className="navigation w-screen flex justify-between items-center relative  h-16 px-4">
        {/* Desktop Navigation */}
        <LanguageSwitcher />
        <div className="w-[100px]"></div>

        <motion.div
          className="flex self-end space-x-2 m-4 bg-background/95"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ThemeToggle />
        </motion.div>
      </div>
    </motion.header>
  );
}

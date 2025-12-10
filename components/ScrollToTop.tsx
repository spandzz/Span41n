import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollPercentage from "../hooks/useScrollPercentage";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const scrollPercentage = useScrollPercentage();

  useEffect(() => {
    if (scrollPercentage > 15) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [scrollPercentage]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll To Top"
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          <IoIosArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

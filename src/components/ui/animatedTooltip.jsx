import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedTooltip = ({ children, content, bgColor = "#ABB2BF" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <div
        className="group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-describedby="tooltip"
      >
        <div className="relative">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: "-50%", y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ type: "tween", duration: 0.3 }}
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center rounded-md z-50 shadow-xl px-4 py-2"
                style={{ backgroundColor: bgColor, marginBottom: "10px" }}
                id="tooltip"
              >
                <div className="relative z-30 text-white text-base font-bold">
                  {content}
                </div>
                <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6"
                  style={{ borderTopColor: bgColor, borderLeftColor: "transparent", borderRightColor: "transparent" }}
                ></div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            className="object-cover rounded-full h-14 w-14 relative transition duration-500"
            whileHover={{ scale: 1.1 }} // Example hover animation
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

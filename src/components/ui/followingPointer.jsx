import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const FollowerPointerLogo = ({ children, title }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef(null);
  const [rect, setRect] = useState(null);
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const updateRect = () => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect());
      }
    };

    updateRect();

    window.addEventListener("scroll", updateRect);

    return () => {
      window.removeEventListener("scroll", updateRect);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (rect) {
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isInside && <FollowPointer x={x} y={y} title={title} />}
      {children}
    </div>
  );
};

const FollowPointer = ({ x, y, title }) => {
  return (
    <motion.div
      className="absolute z-50 h-4 w-4 rounded-full pointer-events-none"
      style={{ top: y, left: x }}
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >

      <motion.div
        style={{ backgroundColor: "white" }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="ml-4 px-2 py-2 text-black whitespace-nowrap min-w-max text-xs rounded-full"
      >
        {title || `Default Title`}
      </motion.div>
    </motion.div>
  );
};

export default FollowerPointerLogo;

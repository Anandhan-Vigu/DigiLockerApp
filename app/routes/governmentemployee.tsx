import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OverlapScroll() {
  const { scrollY } = useScroll();

  // First paragraph moves slightly up
  const para1Y = useTransform(scrollY, [0, 200], [0, -40]);
  // Second paragraph moves more up (to overlap)
  const para2Y = useTransform(scrollY, [0, 200], [0, -120]);

  return (
    <div className="h-[200vh] bg-gray-100 flex flex-col items-center justify-start">
      {/* Sticky container */}
      <div className="sticky top-0 flex flex-col items-center justify-center h-screen overflow-hidden ">

        {/* Paragraph 1 (below) */}
        <motion.p
          style={{ y: para1Y }}
          className="text-lg text-gray-800 text-center px-4 mb-6 z-0"
        >
          This is the first paragraph. It stays visible even when overlapped.
        </motion.p>

        {/* Paragraph 2 + Button (above) */}
        <motion.div
          style={{ y: para2Y }}
          className="text-center px-4 absolute top-1/2 transform -translate-y-1/2 z-10"
        >
          <p className="text-lg text-gray-700 mb-4 bg-white/70 backdrop-blur-md rounded-lg p-2">
            This is the second paragraph that overlaps smoothly.
          </p>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-lg">
            Click Me
          </button>
        </motion.div>

      </div>
    </div>
  );
}

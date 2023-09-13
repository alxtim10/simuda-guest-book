import { motion } from "framer-motion";
import React from "react";

export default function Modal({ text, visible, setShowMyModal }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <motion.div
        className="bg-gradient-to-t from-[#cececb] to-light-cream p-2 rounded-lg w-60 h-24"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5}}
      >
        <div className="relative">
          <p
            onClick={() => setShowMyModal(false)}
            className="absolute top-0 right-0 text-xl font-hubballi mx-2 cursor-pointer"
          >
            X
          </p>
        </div>
        <h1 className="font-hubballi font-semibold text-center text-2xl text-gray-700 m-2">
          Alert
        </h1>
        <p className="font-hubballi text-xl font-semibold text-center text-gray-700 mb-5">{text}</p>
      </motion.div>
    </div>
  );
}

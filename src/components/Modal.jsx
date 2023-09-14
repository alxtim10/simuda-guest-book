import { motion } from "framer-motion";
import React from "react";

export default function Modal({ text, visible, setShowMyModal, modalType }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <motion.div
        className="bg-gradient-to-t from-[#cececb] to-light-cream p-2 rounded-lg w-48 h-25 flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`w-3 mr-1 ${modalType ? "bg-green-500 border-green-500 " : "bg-red-600 border-red-600 " } border-l border-green-500 rounded-xl`}></div>
        <div className="w-full">
          <div className="relative">
            <p
              onClick={() => setShowMyModal(false)}
              className="absolute top-0 right-0 text-xl font-hubballi mx-2 cursor-pointer"
            >
              X
            </p>
          </div>
          <h1 className="font-hubballi tracking-wider font-black text-left text-xl text-gray-700 m-2">
            ALERT
          </h1>
          <p className="font-hubballi tracking-wider text-lg font-semibold text-left text-gray-700 m-2">
            {text}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

import React from "react";
import title from "../assets/website-title.png";
import { motion } from "framer-motion";

const goto = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
};

function Title() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-start text-center items-center">
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 10, y: -70 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.05 }}
        >
          <img src={title} alt="" className="p-2 mt-5 h-20 md:h-32 lg:h-40 " />
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 10, y: 70 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.05 }}
        >
          <h2 className="mt-5 text-xl md:text-2xl lg:text-4xl text-white tracking-wider font-hubballi font-bold">
            PERSEKUTUAN GABUNGAN
          </h2>
          <h2 className="mt-1 text-xl md:text-2xl lg:text-4xl text-white tracking-wider font-hubballi font-bold">
            KOMISI PEMUDA
          </h2>
          <h2 className="mt-1 text-lg md:text-xl lg:text-2xl text-white tracking-wider font-hubballi font-medium">
            GKI KLASIS JAKARTA TIMUR
          </h2>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <button
            onClick={() => goto()}
            className="mt-12 font-hubballi text-white bg-none border rounded-md text-lg px-6 py-3 md:text-xl cursor-pointer
        hover:bg-white hover:text-black transition-all duration-300"
          >
            REGISTRASI
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Title;

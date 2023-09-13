import React, { useState } from "react";
import "./Form.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import ButtonSubmit from "./ButtonSubmit";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { motion } from "framer-motion";

function Form() {
  const [gereja, setGereja] = useState("PILIH GEREJA");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const listGereja = [
    "GKI Grand Wisata",
    "GKI Layur",
    "GKI Agus Salim",
    "GKI Buaran",
    "GKI Kota Wisata",
    "GKI Kemang Pratama",
    "GKI Harapan Jaya",
    "GKI Melur",
    "GKI Cikarang",
    "GKI Bekasi Timur",
    "GKI Sunter",
    "GKI Gading Indah",
    "GKI Rengasdengklok",
    "GKI Cipinang Elok",
    "GKI Kayu Putih",
  ];

  const [guests, setGuests] = useState([]);

  const addGuest = (guest) => {
    if (!guest.name || /^\s*$/.test(guest.name) || gereja === "PILIH GEREJA") {
      alert("Input Gereja dan Nama");
      return;
    }

    const newGuests = [guest, ...guests];

    setGuests(newGuests);
  };

  const removeGuest = (id) => {
    const removedArr = [...guests].filter((guest) => guest.id !== id);

    setGuests(removedArr);
  };

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  //Create Guest
  const addListToDB = async (e) => {
    setLoading(true);
    e.preventDefault(e);

    if (guests.length < 1) {
      alert("Input Gereja dan Nama");

      setLoading(false);
      return;
    }

    await guests.forEach((item) => {
      addDoc(collection(db, "guests"), item);
    });
    setGuests([]);
    await timeout(2000);
    setLoading(false);
    return;
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const handleLi = (gereja) => {
    setGereja(gereja);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="bg-gradient-to-b from-dark-gray to-light-cream min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-hubballi text-4xl">REGISTRASI</h1>
        <div className="flex justify-center items-center">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="menu"
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
              className="shadow-xl bg-none border border-light-cream cursor-pointer text-light-cream hover:bg-light-cream hover:text-gray-900 transition-all duration-200 rounded-md px-5 py-3 w-full text-left mb-4 flex justify-center items-center"
            >
              {gereja}
              <motion.div
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.55 }}
              ></motion.div>
            </motion.button>
            <motion.ul
              className="bg-light-cream p-5 flex flex-col gap-5 absolute w-full h-[250px] overflow-hidden overflow-y-scroll"
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
              {listGereja.map((gereja, index) => {
                return (
                  <motion.li
                    className="p-1 m-0 cursor-pointer hover:text-lg transition-all duration-200 text-center"
                    variants={itemVariants}
                    onClick={() => handleLi(gereja)}
                    key={index}
                  >
                    {gereja}
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.nav>
        </div>
        <div className="flex flex-col justify-start w-full text-center mx-2 rounded-xl pb-2 h-full">
          <h1 className="text-white font-hubballi text-3xl mx-1">
            List Pemuda {gereja === "PILIH GEREJA" ? "" : gereja}
          </h1>
          <TodoForm onSubmit={addGuest} gereja={gereja} />
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center m-2 p-5">
              <div className="flex flex-wrap gap-[5px] md:w-[500px]">
                <Todo guests={guests} removeGuest={removeGuest} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={addListToDB}
        className="bg-light-cream flex justify-center"
      >
        <ButtonSubmit text="SUBMIT" loading={loading} />
      </form>
    </>
  );
}

export default Form;

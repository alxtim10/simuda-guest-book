import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import { query, collection, onSnapshot } from "firebase/firestore";
import { utils, writeFile } from "xlsx";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [guests, setGuests] = useState([]);
  const headerItems = ["GEREJA", "NAMA"];
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "guests"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let guestsArr = [];
      querySnapshot.forEach((doc) => {
        guestsArr.push({ ...doc.data(), id: doc.id });
      });
      guestsArr.sort((a, b) => (a.gereja > b.gereja ? 1 : -1));
      setGuests(guestsArr);
    });
    setIsLoading(!isLoading);
    return () => unsubscribe();
  }, []);

  const handleExport = () => {
    guests.forEach((item) => {
      delete item["id"];
    });
    const ws = utils.json_to_sheet(guests);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFile(wb, "SheetJSReactAoO.xlsx");
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className=" bg-gradient-to-b from-light-cream to-white min-h-screen">
      {isLoading && (<div className="flex justify-center items-center mt-16"><p>Loading...</p></div>)}
      {!isLoading && (
        <>
          <div className="gap-2 flex justify-center items-center">
            <button
              onClick={goHome}
              type="button"
              className="mt-5 btn border border-black px-4 py-2 rounded-xl shadow-2xl hover:text-white hover:bg-black transition-all duration-300"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleExport()}
              className="mt-5 btn border border-black px-4 py-2 rounded-xl shadow-2xl hover:text-white hover:bg-black transition-all duration-300"
            >
              Export Excel
            </button>
          </div>
          <div className="mt-5 flex justify-center items-center">
            <p className="text-2xl font-hubballi font-bold">GUEST BOOK</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-2 text-black">
            <p className="mb-5">Count: {guests.length}</p>
            <table className="font-hubballi text-xl w-1/2 text-center border border-black">
              <thead className="rounded-lg font-bold uppercase bg-gray-50">
                <tr>
                  {headerItems.map((header) => {
                    return (
                      <th
                        key={header}
                        className="px-6 py-3 border border-black"
                      >
                        {header}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="text-xl font-bold">
                {guests
                  .map((item) => {
                    return (
                      <tr
                        key={item.id}
                        className="bg-white border border-black"
                      >
                        <th className="px-6 py-4  text-gray-900 whitespace-nowrap">
                          {item.gereja}
                        </th>
                        <td className="px-6 py-4 border border-black">
                          {item.name}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;

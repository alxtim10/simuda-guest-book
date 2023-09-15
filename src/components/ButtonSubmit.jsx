import React from "react";

function ButtonSubmit({ text, loading, addListToDB }) {
  return (
    <button
      type="button"
      onClick={() => addListToDB()}
      className="font-hubballi text-xl hover:translate-y-[-3px] hover:translate-x-[3px] hover:text-white hover:bg-dark-gray 
    hover:shadow-slate-500 transition-all duration-300 btn border border-solid border-dark-gray px-6 py-3 rounded-lg shadow-md shadow-slate-400 text-black"
    >
      {loading ? 'Loading...' : text }
    </button>
  );
}

export default ButtonSubmit;

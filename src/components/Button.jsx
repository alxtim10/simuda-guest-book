import React from 'react'

function Button({text}) {
    return <button type="button" 
    className="font-hubballi text-xl hover:translate-y-[-3px] hover:translate-x-[3px] hover:text-black hover:bg-light-cream 
    hover:shadow-slate-800 transition-all duration-300 btn border border-solid px-6 py-3 rounded-lg shadow-md shadow-slate-400 text-white">{text}</button>;
}

export default Button
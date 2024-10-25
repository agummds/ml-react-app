import React from "react";

export default function HomePage(){
    return(
        <main className='flex-1 p-4 flex flex-col justify-center gap-2 text-center sm:gap-3 md:gap-4 justify-center pb-80'>
            <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl "><span className="text-red-400 bold">Trans</span>cribe</h1>
            <h3 className="font-semibold md:text-lg"> Record <span 
            className="text-red-400">&rarr;</span> Transcribe<span 
            className="text-red-400">&rarr;</span> Translate</h3>
            <button className="flex items-center text-base justify-between gap-5 mx-auto w-72 max-w-full my-5">
                <p>Record</p>
                <i className="fa-solid fa-microphone-lines"></i>
            </button>
            <p className="text-base">Or  <label className="text-red-500 cursor pointer hover:text-red-500 duration-100"
            >Upload <input className="hidden" type="file" accept=".mp3, .wave"></input></label>a mp3 file</p>
            <p className="italic text-slate-400">Free now free forever</p>
        </main>
    )
}
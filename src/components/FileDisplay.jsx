import React from "react";

export default function FileDisplay(props){
    const {handleAudioReset, file, audioStream} = props 
    return(
            <main className='flex-1 p-4 flex flex-col justify-center 
            gap-2 text-center sm:gap-3 md:gap-4 justify-center pb-20 w-fit max-w-full mx-auto'>
                <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl "><span 
                className="text-red-400 bold">Your </span>File</h1>

                <div className="mx-auto flex flex-col text-center mb-2">
                    <h3 className="font-semibold">Name:</h3>
                    <p>{file.name}</p>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <button className="text-slate-400 ">
                        Reset
                    </button>
                    <button className="specialBtn px-4 py-2 rounded-lg text-red-400">
                        <p>
                        Transcribe
                        </p>
                    </button>
                </div>

            </main>

    )
}
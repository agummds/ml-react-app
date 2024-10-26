import React from "react";

export default function FileDisplay(props){
    const {handleAudioReset, file, audioStream, handleFormSubmission} = props 
    return(
            <main className='flex-1 p-4 flex flex-col justify-center 
            gap-2 text-center sm:gap-3 md:gap-4 justify-center pb-20 w-72 max-w-full mx-auto'>
                <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl "><span 
                className="text-red-400 bold">Your </span>File</h1>

                <div className="mx-auto flex flex-col text-center my-2">
                    <h3 className="font-semibold">Name Audio:</h3>
                    <p>{file? file?.name : 'Costum Audio'}</p>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <button onClick={handleAudioReset} className="text-slate-400 hover:text-red-200 duration">
                        Reset
                    </button>
                    <button onClick={handleFormSubmission} 
                    className="specialBtn px-4 p-2 rounded-lg text-red-400 flex items-center gap-1">
                        <p>
                        Transcribe
                        </p>
                        <i className="fa-solid fa-pencil"></i>
                    </button>
                </div>

            </main>

    )
}
import React, { useState } from "react"
import Transcription from "./Transcription"
import Translation from "./Translation"

export default function Information(){
    const [tab, setTab] = useState('Trasnkrip')
    return(
    <main className='flex-1 p-4 flex flex-col justify-center 
    gap-2 text-center sm:gap-3 md:gap-4 justify-center pb-20 max-w-prose w-full mx-auto'>
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl whitespace-nowrap "><span 
        className="text-red-400 bold">Your </span>Transcript</h1>

        <div className="grid grid-cols-2 flex mx-auto bg-white shadow 
        rounded-full overflow-hidden items-center">
        <button onClick={()=>{
            setTab('Transkrip')
        }} className={"px-10 duration-200 py-2 font-medium text-red-400" + (tab === 'Transkrip' ? 
            ' bg-red-400 text-white' : 'text-red-400 hover:text-red-500')}>Transkrip
            </button>
        <button onClick={()=>{
            setTab('Terjemahan')
        }} className={"px-10 duration-200 py-2 font-medium text-red-400"+ (tab === 'Terjemahan' ? 
            ' bg-red-400 text-white' : 'text-red-400 hover:text-red-500')}>
                Terjemahan
        </button>
        </div>
        {tab === 'Transkrip'?(
            <Transcription/>
        )   : (
            <Translation/>
        )}
        </main>

    )
}
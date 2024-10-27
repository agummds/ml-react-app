import React, { useState } from "react"
import Transcription from "./Transcription"
import Translation from "./Translation"

export default function Information(props){
    const {output} = props
    const [tab, setTab] = useState('Trasnkrip')
    console.log (output)
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
            ' bg-red-200 text-white' : 'text-red-400 hover:text-red-500')}>Transkrip
            </button>
        <button onClick={()=>{
            setTab('Terjemahan')
        }} className={"px-10 duration-200 py-2 font-medium text-red-400"+ (tab === 'Terjemahan' ? 
            ' bg-red-200 text-white' : 'text-red-400 hover:text-red-500')}>
                Terjemahan
        </button>
        </div>
        <div className="my-5 flex flex-col">
        {tab === 'Transkrip'?(
            <Transcription {...props} />
        )   : (
            <Translation {...props} />
        )}
        </div>
        <div className="flex items-center gap-10 mx-auto">
            <button title="Copy" className="bg-transparent hover:text-red-100 duration-300 text-red-600 px-2 aspec-square grid place-itmes-center rounded">
            <i className="fa-solid fa-clone"></i>
            </button>
            <button title="Download" className="bg-transparent hover:text-red-100 duration-300 text-red-600 px-2 aspec-square grid place-itmes-center rounded">
            <i className="fa-solid fa-download"></i>
            </button>
        </div>
        </main>

    )
}
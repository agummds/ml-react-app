import React from "react"

export default function Transcribe(props){
    const {downloading} = props

    return(
        <div className="flex items-center flex-col justify-center gap-10 md:gap-14 py-24">
            <div className="flex flex-col gap-2 sm:gap-4">
                
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl ">Transcribing<span 
                className="text-red-400 bold"></span>
            </h1>
            <p>
                {!downloading ? 'warning up cylinders' : 'core cylinders engaged'}
            </p>
            </div>

            <div className="flex flex-col gap-2 sm:gap-4 max-w-[5000px] mx-auto -w-full">
                {[0,1,2].map(val => {
                return(
                    <div key={val} className={'rounded-full h-2 sm:h-3 bg-slate-400 loading ' + `loading${val}`}>
                    </div>
                )
            })}

            </div>
        </div>
    )
}
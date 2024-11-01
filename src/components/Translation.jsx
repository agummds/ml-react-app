import React, { useState } from "react"
import{LANGUAGES}  from '../utils/presets'

export default function Translation(props){
    const {translation, textElement, toLanguage, translating, setTranslation, setTranslating, setToLanguage} = props
    return(
        <div className="flex flex-col gap-2 mx-w-[4--px] w-full mx-auto">
            <div className="flex items-stretch gap-5">
                <select value={toLanguage} className="flex-1 outline-none bg-white focus:outline-none border border-solid border-transparent
                hover:border-red-300 duration-200 p-1 rounded" onChange={(e) => setToLanguage
                    (e.target.value)
                }>
                    <option value={'Select Language'}>
                        Select Language
                    </option>
                    {Object.entries(LANGUAGES).map((
                        [key, value]) =>{
                            return(
                                <option key={key} value={value}>
                                {key}
                                </option>
                            )
                        
                    })}

                </select>
                    <button className="specialBtn px-4 py-2 rounded-lg text-red-400 font-medium hover:text-red-700 duration-200 ">Terjemahkan</button>
            </div>
        </div>
    )
}
import React from "react"
import{LANGUAGES}  from '../utils/presets'

export default function Translation(props){
    const {translation, textElement, toLanguage, translating, setTranslation, setTranslating, setToLanguage, generateTranslation} = props
    return(
        <div className="flex flex-col gap-2 mx-w-[4--px] w-full mx-auto">
            {!translating && (<div className="flex flex-col gap-5">
                <p className="text-xs sm:text-sm font-medium text-slate-600 mr-auto">Ke Bahasa</p>
            <div className="flex items-stretch gap-5">
                <select value={toLanguage} className="flex-1 outline-none bg-white focus:outline-none border border-solid border-transparent
                hover:border-red-300 duration-200 p-1 rounded" onChange={(e) => setToLanguage
                    (e.target.value)
                }>
                    <option value={'Select Language'}>
                        Pilih Bahasa
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
                    <button onClick={generateTranslation} className="specialBtn px-4 py-2 rounded-lg text-red-400 font-medium hover:text-red-700 duration-200 ">Terjemahkan</button>
            </div>
            </div>)}
            {(textElement && !translating) && (
                <p>
                    {translation}
                </p>
            )}
            { translating && (
                <div className="grid place-items-center">
                    <i className="fa-solid fa-atom animate-spin"></i>
                </div>
            )}
        </div>
    )
}
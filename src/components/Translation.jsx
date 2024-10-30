import React, { useState } from "react"
import{LANGUAGES}  from '../utils/presets'

export default function Translation(props){
    const {translation, textElement, toLanguage, translating, setTranslation, setTranslating, setToLanguage} = props
    return(
        <div className="flex flex-col gap-2">
            <div className="flex items-stretch">
                <select value={toLanguage} onChange={(e) => setToLanguage
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

            </div>
            Hasil Terjemahan
        </div>
    )
}
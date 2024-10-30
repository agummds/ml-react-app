import React, { useState } from "react"

export default function Transcription(props){
    const {textElement} = props
    // console.log(output)
    // const finalText = output.map(val => val.text)
    return(
        <div>
            {textElement}
        </div>
    )
}
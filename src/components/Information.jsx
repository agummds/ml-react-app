import React, { useState, useEffect, useRef } from "react"
import Transcription from "./Transcription"
import Translation from "./Translation"

export default function Information(props){
    const {output, finished} = props
    const [tab, setTab] = useState('transcription')
    const [translation, setTranslation] = useState(null)
    const [translating, setTranslating] = useState(null)
    const [toLanguage, setToLanguage] = useState("Select Language")
    console.log (output)

    const worker = useRef()

    useEffect (() => {
        if (!worker.current) {
            worker.current = new Worker(new URL('../utils/translate.worker.js', import.meta.url), {
              type: 'module'
            })
        }
        const onMessageReceived = async (e) => {
            switch (e.data.type) {
              case 'inisiate':
                //setDownloading(true)
                console.log('DOWNLOADING')
                break;
              case 'progress':
                //setLoading(true)
                console.log('LOADING')
                break;
              case 'update':
                setTranslation(e.data.output)
                console.log(e.data.output)
                break;
              case 'complete':
                setTranslating(true)
                console.log("DONE")
                break;
            }
          }
      
          worker.current.addEventListener('message', onMessageReceived)
      
          return () => worker.current.removeEventListener('message', onMessageReceived)
    })

    const textElement = tab === 'transcription' ? output.map(val => val.text) :translation || 'No Translation'

    function handleCopy(){
        navigator.clipboard.writeText(textElement)
    }

    function handleDownload(){
        const element = document.createElement('a')
        const file = new Blob([textElement],{
        type: 'text/plain'})
        element.href = URL.createObjectURL(file)
        element.download = `Transcribe_${new Date().toString()}.txt`
        document.body.appendChild(element)
        element.click()
    }

    function generateTranslation(){
        if (translating || toLanguage === 'Pilih Bahasa'){
            return
        }

        setTranslating(true)

        worker.current.postMessage({
            text: output.map(val => val.text),
            src_lang: 'eng_Latn',
            tgt_lang : toLanguage
        })


    }

    return(
    <main className='flex-1  p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 max-w-prose w-full mx-auto'>
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl whitespace-nowrap "><span 
        className="text-red-400 bold">Your </span>Transcript</h1>
        <div className="grid grid-cols-2 text-red-400 flex mx-auto bg-white shadow 
        rounded-full overflow-hidden items-center">
        <button onClick={()=>{setTab('transcription')}} 
        className={"px-10 duration-200 py-2 font-medium text-red-400" + (tab === 'transcription' ? 
            ' bg-red-400 text-white' : 'text-red-400 hover:text-red-600')}>Transkrip
            </button>
        <button onClick={()=>{setTab('Terjemahan')}} 
        className={"px-10 duration-200 py-2 font-medium text-red-400"+ (tab === 'Terjemahan' ? 
            ' bg-red-400 text-white' : 'text-red-400 hover:text-red-600')}>
                Terjemahan
        </button>
        </div>
        
        {/* <div className="flex-col-reverse max-w-prose w-full mx-auto gap-5">
            {(!finished || translating) && (
                <div className="grid place-item-center">
                    <i className="fa-solid fa-atom"></i>
                </div>
            )}
        </div> */}

        <div className="my-8 flex flex-col">
        {tab === 'transcription'?(
            <Transcription {...props} textElement = {textElement}/>
        )   : (
            <Translation {...props} toLanguage = {toLanguage} 
            translating = {translating} 
            //translation = {translation}
            textElement = {textElement}
            setTranslating = {setTranslating}
            setTranslation = {setTranslation}
            setToLanguage = {setToLanguage} 
            generateTranslation = {generateTranslation} />
        )}
        </div>
        <div className="flex items-center gap-10 mx-auto">
            <button onClick= {handleCopy} title="Copy" className="bg-transparent hover:text-red-100 duration-300 text-red-600 px-2 aspec-square grid place-itmes-center rounded">
            <i className="fa-solid fa-clone"></i>
            </button>
            <button onClick={handleDownload} title="Download" className="bg-transparent hover:text-red-100 duration-300 text-red-600 px-2 aspec-square grid place-itmes-center rounded">
            <i className="fa-solid fa-download"></i>
            </button>
        </div>
        </main>

    )
}
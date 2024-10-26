import React, {useState, useEffect, useRef} from "react";

export default function HomePage(props){

    const {setAudioStream, setFile} = props
    const [recordingStatus, setRecordingStatus] = useState('inactive')
    const [audioChunks, setAudioChunks] = useState([])
    const [duration, setDuration] = useState(0)

    const mediaRecorder = useRef(null)

    const mimeType = 'audio/webm'

    async function startRecording() {
        let tempStream
        console.log ('Start recording')
        try {
            const streamData = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video : false
            })
            tempStream = streamData

        }catch (err){
            console.log(err.message)
            return
        }

        setRecordingStatus('recording')

        //Create new Media Recorder
        const media = new  MediaRecorder(tempStream, {type: mimeType})

        mediaRecorder.current = media
        mediaRecorder.current.start()
        let localAudioChunks = []
        mediaRecorder.current.ondataavailable = (event) =>{

            if(typeof event.data === 'undefined'){return}
            if(event.data.size === 0){return}
            localAudioChunks.push(event.data)

        }
        setAudioChunks(localAudioChunks)
        
    }

    async function stopRecording() {

        setRecordingStatus('inactive')
        console.log('Stop Recording')

        mediaRecorder.current.stop()
        mediaRecorder.current.onstop = () =>{
            const audioBlob = new Blob (audioChunks, {type: mimeType})
            setAudioStream(audioBlob)
            setAudioChunks([])
            setDuration(0)
        }
    }

    useEffect(() => {
        if (recordingStatus === 'inactive') {return}

        const interval = setInterval(() => {
            setDuration(curr => curr +1)
        }, 1000)

        return () => clearInterval(interval)
    })

    return(
        <main className='flex-1 p-4 flex flex-col justify-center gap-2 text-center sm:gap-3 md:gap-4 justify-center pb-80'>
            <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl "><span className="text-red-400 bold">Trans</span>cribe</h1>
            <h3 className="font-semibold md:text-lg"> Record <span 
            className="text-red-400">&rarr;</span> Transcribe<span 
            className="text-red-400">&rarr;</span> Translate</h3>
            <button onClick={recordingStatus === 'recording' ? stopRecording : startRecording} className="flex items-center text-base justify-between gap-5 mx-auto w-72 max-w-full my-5 specialBtn px-3 py-2 rounded-xl">
                <p className="text-red-400">{ recordingStatus === 'inactive'? 'Record' :  `Stop recording`}</p>
                <div className="flex items-center gap-2">  
                    {duration && (
                        <p className="text-sm">
                            {duration}s
                        </p>
                    )}
                <i className={"fa-solid duration-200 fa-microphone-lines" + (recordingStatus === 'recording' ? 'text-rose-400' : "")}></i>
                </div>
            </button>
            <p className="text-base">Or  <label className="text-red-500 cursor-pointer hover:text-red-300 duration-200"
            >Upload <input onChange={(e) => {
                const tempFile = e.target.files[0] 
                setFile(tempFile)
            }} className="hidden" type="file" accept=".mp3, .wave"></input></label>a mp3 file</p>
            <p className="italic text-slate-400">Free now free forever</p>
        </main>
    )
}
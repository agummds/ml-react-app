import { useState, useEffect } from 'react'
import HomePage from './components/HomePage'
import Header from './components/Header'
import FileDisplay from './components/FileDisplay'
import Transcribing from './components/Transcribing'


function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const isAudioAvailable = file || audioStream

  const [output, setOutput] = useState(null)
  const [loading, setLoading] = useState(true )
 
  function handleAudioReset(){
    setFile(null)
    setAudioStream(null)
  }

  useEffect(()=>  {
    console.log(audioStream)
  }, [audioStream])

  return (
    <div className='flex flex-col p-4 max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header/>
        {output ? (
          <Information/>
        ) : loading ? (
          <Transcribing/>
        ) : isAudioAvailable ? (
          <FileDisplay handleAudioReset = {handleAudioReset} file={file} audioStream= {setAudioStream} />
        ) :
          <HomePage setFile={setFile} setAudioStream={setAudioStream}/>
      }
      </section>
    <h1 className='text-green-400'>Agum Medisa</h1>
    <footer>

    </footer>
    </div>
  )
}

export default App

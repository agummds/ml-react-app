import { useState } from 'react'

function App() {
  return (
    <div className='flex flex-col p-4 max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <header className='flex item-center justify-between gp-6'>
        <h1><span className='text-red-400'>Trans</span>cribe</h1>
        <button className='flex item-center gap-1'>
          <p>New</p>
          <i className="fa-solid fa-plus"></i>
        </button>
        </header>
        <main className='flex-1'>

        </main>
      </section>
    <h1 className='text-green-400'>Agum Medisa</h1>
    <footer>

    </footer>
    </div>
  )
}

export default App

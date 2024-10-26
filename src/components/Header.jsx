import React from "react";

export default function Header(){
    return(
        <header className='flex item-center justify-between gp-6 p-4'>
          <a href="/">
          <h1 className="font-semibold"><span className='text-red-400 bold'>Trans</span>cribe</h1>
        </a>
        <a href="/" className='flex items-center gap-1 specialBtn px-4 tect-sm rounded-lg text-red-400'>
          <p>New</p>
          <i className="fa-solid fa-plus"></i>
        </a>
        </header>
    )
}
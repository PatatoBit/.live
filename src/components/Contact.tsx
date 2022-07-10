import Image from 'next/image'
import React from 'react'


function Contact() {
  return (
    <div className="fullflex">
      <h1 className="mario text-4xl mb-4">Contacts</h1>

      <div className="flex flex-col sm:flex-row">
          <a className="text-center contact-card mario mx-2 hover:bg-blue-400 hover:text-white hover:border-blue-400" href="https://twitter.com/patatotota"  target="_blank" rel="noopener noreferrer">Twitter</a>
          <a className="text-center contact-card mario mx-2 hover:bg-slate-800 hover:text-white hover:border-slate-800" href="https://github.com/pathonscript"  target="_blank" rel="noopener noreferrer">Github</a>
          <a className="text-center contact-card mario mx-2 hover:bg-red-500 hover:text-white hover:border-red-500" href="mailto:pathonscript@gmail.com">pathonscript@gmail.com</a>
          <h1 className="text-center contact-card text-white bg-blue-500 mario mx-2 border-blue-500">
            Patato#0001
          </h1>
      </div>
    </div>
  )
}

export default Contact
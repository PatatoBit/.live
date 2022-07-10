import React from 'react'

function Skills() {
  return (
    <div className="fullflex">
      <h1 className="mario text-6xl mb-4">Skills</h1>
      <div className="flex flex-row w-3/4 h-3/4">
        
        <div className="flex flex-1 flex-col items-center">
          <h1 className="mario text-3xl text-yellow-500 text-center">Intermediate</h1>

          <ul className="py-4">
            <li className="mario">JS & TS</li>
            <li className="mario">Svelte & SvelteKit</li>
            <li className="mario">React & NextJS</li>
            <li className="mario">TailwindCSS</li>
            <li className="mario">Discord.JS</li>
            <li className="mario">Firebase</li>
          </ul>
        </div>
        
        <div className="flex flex-1 flex-col items-center">
          <h1 className="mario text-3xl text-green-500 text-center">Familiar</h1>
          
          <ul className="py-4">
            <li className="mario">C++</li>
            <li className="mario">Python</li>
            <li className="mario">Java</li>
            <li className="mario">Go & Godot</li>
          </ul>
        </div>
        
        <div className="flex flex-1 flex-col items-center">
          <h1 className="mario text-center text-gray-500 text-3xl ">Eh</h1>

          <ul className="py-4">
            <li className="mario">Unity</li>
            <li className="mario">C#</li>
            <li className="mario">C</li>
            <li className="mario">Rust</li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Skills
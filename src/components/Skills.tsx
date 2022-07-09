import React from 'react'

function Skills() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <h1 className="mario text-6xl mb-4">Skills</h1>
      <div className="flex flex-row w-3/4 h-3/4">
        
        <div className="flex flex-1 flex-col">
          <h1 className="mario text-3x text-center">Intermediate</h1>

        </div>
        <div className="flex flex-1 flex-col">
          <h1 className="mario text-3x text-center">Familiar</h1>

        </div>
        <div className="flex flex-1 flex-col">
          <h1 className="mario text-3x text-center">Eh</h1>

        </div>

      </div>
    </div>
  )
}

export default Skills
import React, { useState } from 'react'

//1206835200000



function About() {
  //messy asf
  let [patAge, setPatAge] = useState('');
  setInterval(() => {
    let time = (new Date().getTime() - new Date(1206835200000).getTime()) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
    let age = time.toString().substring(0, 12);
    setPatAge(patAge = time.toString().substring(0, 12))
  }, 50);


  return (
    <div className="fullflex">
      <h1 className="mario text-6xl mb-4">About me</h1>  
      <p className="mario text-center text-2xl w-3/5">Hi, my name is Pat. I&apos;m from Thailand. I started coding since I was about 10-11.I like making fun stuffs.</p>
      
      <div>
        <h1 className="mt-10 text-4xl text-yellow-500 mario">Current Age</h1>
        <h1 className="mario text-2xl text-center text-green-500">{patAge}</h1>
      </div>
    </div>

  )
}

export default About
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1">
    <div className="ml-[3px] mt-16">
      <Image src="/images/profile.jpg" alt="my-pic"width={300} height={300} className="rounded-fill ml-[40%]"/>
      </div>
      <div>
      <h2 className="text-6xl text-left gap-y-2 ml-[30%] mt-[20%] font-bold  text-lightgreen-600">Hello <br/> I'm <br/>Sheheryar Khan </h2></div>
      <div className="ml-[40%] flex gap-14 mt-12">
        <button className="text-xl p-3 border-2 border-lightgreen-600 rounded-2xl"><Link href="/about">About Me</Link></button>
        <button className="text-xl p-3 border-2 border-lightgreen-600 rounded-2xl">Contact Me</button>
        </div>
    </div>
  )
}

export default Hero

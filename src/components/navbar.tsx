import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div>
      <header className="text-black-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/images/profile.jpg" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
        <h2 className="text-white-100 hover:text-blue-500 font-bold">Sheheryar Khan</h2>
      <span className="ml-3 text-xl">Tailblocks</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 text-white hover:text-orange-300">Home</Link>
      <Link  href="/about" className="mr-5 text-white hover:text-orange-300">About</Link>
      <Link href="/projects "className="mr-5 text-white hover:text-orange-300">Projects</Link>
      <Link  href="/contact" className="mr-5 text-white hover:text-orange-300">Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-orange-300 rounded text-base mt-4 md:mt-0">
      Download CV
      
    </button>
  </div>
</header>

    </div>
  )
}

export default Navbar

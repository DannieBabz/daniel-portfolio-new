import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="w-full py-6 text-center flex flex-col-reverse gap-y-4 lg:flex-row justify-around text-muted text">
            <p>© 2026 Daniel.dev. Designed & built with care.</p>
            <div className="flex gap-x-4 justify-center items-center">
                <Link href="https://github.com/DannieBabz" className="text-accent hover:underline">GitHub</Link> | <Link href="https://www.linkedin.com/in/babatunde-daniel/" className="text-accent hover:underline">LinkedIn</Link> 
            </div>
        </footer>
    </>

  )
}

export default Footer
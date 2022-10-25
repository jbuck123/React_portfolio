import React from 'react'

// components
import Home from "../component/Home"
import AboutMe from "../component/AboutMe"
import Skills from '../component/Skills'

export default function HomePage() {

    return (
        <div className='flex-container'>
            <Home />
            <AboutMe />
            <Skills />
        </div>
    )
}
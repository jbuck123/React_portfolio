import React from 'react'

// components
import Home from "../component/Home"
import AboutMe from "../component/AboutMe"
import Skills from '../component/Skills'
import Education from '../component/Education'

export default function HomePage() {

    return (
        <div className='flex-container'>
            <Home />
            <AboutMe />
            <Skills />
            <Education />
        </div>
    )
}
import React from 'react'

// Importing Zoom effect
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

// components
import Home from "../component/Home"
import AboutMe from "../component/AboutMe"
import Skills from '../component/Skills'
import Education from '../component/Education'
import Projects from '../component/Projects'
import Contact from '../component/Contact'

export default function HomePage() {

    return (
        <div className='flex-container'>
            <Fade>
            <Home />
            <AboutMe />
            <Skills />
            <Education />
            <Projects />
            </Fade>
        </div>
    )
}
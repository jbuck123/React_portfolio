import React from 'react'

export default function Header() {
    // const headerStyle = {
    //     padding: "60px",
    //     text-align: 'center',
    //     background: "#3333",
    //     color: "white",
    //     backgroundColor: "DodgerBlue",
    //     padding: "10px",
    //     fontFamily: "Arial"
    // };
    return (

        <div className='header'>
            <h1>James Buchmann</h1>
            <div className='navLinks'>
            <a>About Me</a>
            <a>My Projects</a>
            <a>Contact Me!</a>
            </div>
        </div>
    )
}
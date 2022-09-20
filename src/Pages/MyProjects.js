import React from 'react'

export default function MyProjects() {
    return (
      <div className="parent">
        <div className="children">
          <h1>Item 1</h1>
    
        </div>
        <div className="children">
          <h1>Scheduler</h1>
          <a href="https://github.com/jbuck123/Scheduler"><img className='project-image' src="images/workDayScheduler.png"></img></a>

        </div>
        <div className="children">
          <h1>Item 3</h1>
        </div>
        <div className="children">
          <h1>Item 4</h1>
        </div>
        <div className="children">
          <h1>Certified Tomatoes</h1>
          <p>Certified Tomatoes was my First project at the U of M bootcamp.</p>
          <p>This basic web application is a movie guessing game that utilizes IMDB api!</p>
          <a href="https://github.com/Minotaurius/Certified_Tomatoes"><img src="images/project_demo.gif" className='project-image'></img></a>
        </div>
        <div className="children">
          <h1>Item 6</h1>
        </div>
      </div>
    );
} 
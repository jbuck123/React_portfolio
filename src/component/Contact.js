import React from 'react'

export default function Contact() {
    return (
      <div className='container'>
        <form>
          <label for="fname">First Name</label>
          <input type={"text"} id="fname" name="firstname"></input>

          <label for="lname">Last Name</label>
          <input type={"text"} id="lname" name="lastname"></input>

          <label for="subject">Leave a Message</label>
          <textarea id='subject' name="subject" placeholder='Write something... ' style={{height:"200px"}}></textarea>
          <input type={"submit"} value="Submit"></input>
        </form>
      </div>
    );
} 
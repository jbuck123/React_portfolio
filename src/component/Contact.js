import React from 'react'

export default function Contact() {


    return (
      <div className='container'>
        <form>
          <label for="fname">First Name</label>
          <input   type={"text"} id="firstName" name="firstName"></input>

          <label for="email">Email</label>

          <input  type={"text"} id="email" name="email"></input>

          <label for="subject">Leave a Message</label>
          <textarea   id='subject' name="subject" placeholder='Write something... ' style={{height:"200px"}}></textarea>
          <input type={"submit"} value="Submit"></input>
        </form>
      </div>
    );

    
} 










// CODE I CAN USE FOR LATER FUTURE DEVELOPEMENT 


// const [fName, setFirstName] = useState('');



// const handleFormSubmit = (event) => {
//   event.preventDefault();
//   // I will need to set up a schemas with resolvers and typeDefs
//   // also can create UTILS to for mutation (create)
//   // and a UTIL file for Query(get)
//   const [addUser, ()] = useMutation

// }
// const handleFnameChange = (event) => {
// setfName(event.target.value)
// }
// // const handleEmailChange

// // this is the dr
// const [formData, setFormData] = useState({
// firstName: "",
// email: '',
// subject:''
// })

// const handleInputChange = (event) => {
//   setFormData({
//     ...formData,
//     [event.target.name]: event.target.value
//   });
// };
// // eventually I will add a graphqL and make this a full stack application
// another thing I want to add is a login ... basically create an admin login that will allow me to see form submissions
// for now this can just be refrences to use later
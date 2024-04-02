import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  
  const postRequest = (e) => {
    e.preventDefault()
    const post = {
      name,
      email,
      phone
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      })
        .then(response => {
          if (!response.ok) {
            alert("Network response was not ok")
          }
          return response.json(); 
        })
        .then(data => {
          alert('Email sent successfully:', data);
          console.log(data)
          // Handle the response data here
      
        })
     
    

}
  return (
    <>
   
    <div className='Contact row justify-content-center'>
          <h1 className=''>Contact us</h1>
          <div className='col-md-4'>
          <form action='#' onSubmit={postRequest} >
            <input className="input" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
            <input className="input" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input className="input" type="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} Email placeholder="Phone Number" />
            <input className='send-Submit' value="send" type='submit' />
          </form>


          </div>
          <div className='col-md-4 contact-me'>
            <div>
          <img src="/images/ic_round-mail.png" alt />
          <span>upskilling.eg1@gmail.com</span>
            </div>
        <div>
            <img src="/images/ic_round-call.png" alt />
          <span>+20 115 493 2137</span>
        </div>  

        

            

          </div>
  
          
      
    </div>
            <div className='footer'></div>
    </>
  )
}

  export default Contact

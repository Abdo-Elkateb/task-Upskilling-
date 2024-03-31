import React from 'react'

const Contact = () => {
  return (
    <>
   
    <div className='Contact row justify-content-center'>
          <h1 className=''>Contact us</h1>
          <div className='col-md-4'>
              <form>
          <input className="input" type="text" id="lname" placeholder="Full Name"  />
          <input className="input" type="text" id="lname" placeholder="Email" />
          <input className="input" type="phone" id="lname" placeholder="Phone Number" />
          <input className='send-Submit' type="submit" value="send"/>
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

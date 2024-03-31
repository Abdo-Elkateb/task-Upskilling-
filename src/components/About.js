import React from 'react'

const About = () => {
    return (
        <div className='about'>
            <div className='row'>
                <div className='col-md-7 about-details'>
                    <h1 className=''>About <br/>
                        us</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button>Contact us</button>

                </div>
                <div className='col-md-5 image-about'>

                        <img className='chef' src='/images/WhatsApp chef 2024-01-19 at 00.27 1.png' alt="Girl in a jacket" />
                    </div>


            </div>
        </div>
    )
}

export default About

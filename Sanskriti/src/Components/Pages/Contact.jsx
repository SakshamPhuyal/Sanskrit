import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = () => {
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#B07A5A] to-[#FFD89A] p-6 flex justify-center items-center'>
   <div className='p-4 text-amber-960 bg-[#B07A5A] rounded-3xl border-2 border-yellow-800 items-center h-150 w-200 justify-center items-center'>
<h1 className='text-center  text-4xl'>Get in Touch</h1>
    <p className='text-2xl'>This project is built to reconnect new generation with our cultural roots. Whether you want to buy goods or want to know about our culture, feel free to drop a message! </p>
    <div className="flex flex-col items-center">
   <p className='text-left w-full ml-93 mt-1 text-1xl'><b>Name:</b></p>
   <input className='mt-1 mb-3 w-100 h-12 border-black border-2 rounded-2xl p-5 bg-yellow-100' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name'/><br />
   <p className='text-left w-full ml-93 mt-1 text-1xl'><b>Email:</b></p>
<input className='mt-1 mb-3 w-100 h-12 border-black border-2 rounded-2xl p-5 bg-yellow-100' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/><br />
   <p className='text-left w-full ml-93 mt-1 text-1xl'><b>Message:</b></p>
<input className='mt-1 mb-3 w-100 h-22 border-black border-2 rounded-2xl p-5 bg-yellow-100' type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Type your message . . . . .'/><br />
  <button onClick={handleSubmit} className="bg-amber-950 rounded-2xl w-40 h-10 mt-1 text-2xl text-white cursor-pointer">
    Submit
  </button>
  </div>
  <div className="mt-8 flex justify-center items-center">
  <a href="https://www.facebook.com/saksham.phuyal" target='_main'><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
  <a href="https://github.com/SakshamPhuyal/60-days-challenge" target='_main'><FontAwesomeIcon icon={faGithub} size="2x" className='ml-15' /></a>
<a href="https://www.facebook.com/saksham.phuyal" target='_main'><FontAwesomeIcon icon={faLinkedin} size="2x"  className='ml-15'/></a>
</div>
   </div>
    </div>

  )
}

export default Contact

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#B07A5A] to-[#FFD89A] p-6 flex justify-center items-center'>
      <div className='p-4 text-amber-960 bg-[#B07A5A] rounded-3xl border-2 border-yellow-800 items-center h-150 w-200 justify-center items-center max-sm:w-full max-sm:h-auto max-sm:p-4'>
        <h1 className='text-center text-4xl'>Get in Touch</h1>
        <p className='text-2xl'>
          This project is built to reconnect new generation with our cultural roots. Whether you want to buy goods or want to know about our culture, feel free to drop a message!
        </p>
        <div className="flex flex-col items-center">
          <p className='text-left w-full ml-93 mt-1 text-1xl max-sm:ml-4 max-sm:text-base'><b>Name:</b></p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Your Name'
            className='mt-1 mb-3 w-100 h-12 border-black border-2 rounded-2xl p-5 bg-yellow-100 max-sm:w-full max-sm:h-10 max-sm:p-3'
          />
          <p className='text-left w-full ml-93 mt-1 text-1xl max-sm:ml-4 max-sm:text-base'><b>Email:</b></p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='mt-1 mb-3 w-100 h-12 border-black border-2 rounded-2xl p-5 bg-yellow-100 max-sm:w-full max-sm:h-10 max-sm:p-3'
          />
          <p className='text-left w-full ml-93 mt-1 text-1xl max-sm:ml-4 max-sm:text-base'><b>Message:</b></p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Type your message . . . . .'
            className='mt-1 mb-3 w-100 h-22 border-black border-2 rounded-2xl p-5 bg-yellow-100 resize-none max-sm:w-full max-sm:h-28 max-sm:p-3'
          />
          <button
            onClick={handleSubmit}
            className='bg-amber-950 rounded-2xl w-40 h-10 mt-1 text-2xl text-white cursor-pointer max-sm:w-full max-sm:text-xl'
          >
            Submit
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center space-x-6 max-sm:space-x-4">
          <a href="https://www.facebook.com/saksham.phuyal" target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://github.com/SakshamPhuyal/60-days-challenge" target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/saksham-phuyal" target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact

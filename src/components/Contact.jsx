import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')

  const handleSubmit = (e)=>{
    
    if(!name && !email && !message){
      alert('please fill all the fields')
      e.preventDefault()
    }
  
  }
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/7a1ed756-ffdf-4979-95a2-184c33e51429" className='flex flex-col max-w-[600px] w-full h-full'>
            <div className=' pt-12'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 pt-4'>Contact</p>
                <p className='text-gray-300 py-4'>{"//"} Submit the form below or shoot me an email - agimezeluemmanuel@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            <button onClick={handleSubmit} className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact

import React from 'react'

function InputText({title, placeholder, name, isrequired, onChange, type='text', value='', className}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <h3 className='text-sm ml-3 font-semibold text-teal-600'>{title}</h3>
      <input onChange={onChange} name={name} type={type} value={value} className='border-2 bg-black/25 focus:bg-black/50 text-white font-semibold focus:placeholder:text-teal-400 border-teal-600 focus:outline-none focus:border-teal-400 ease-in-out focus:shadow-lg duration-300 rounded-xl w-full pl-2 h-[2.1rem] placeholder:text-teal-600/50 placeholder:font-light' placeholder={placeholder} required={isrequired} />
    </div>
  )
}

export default InputText
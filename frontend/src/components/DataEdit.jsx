import React, { useState } from 'react'

function DataEdit({title, value, name, onChange, className}) {
  const [active, setActive] = useState(false)

  return (
    <div className={`flex flex-col ${className}`}>
      <h3 className='font-semibold text-sm ml-2 text-amber-500'>{title}</h3>
      <div className={ ` w-full bg-neutral-100 overflow-hidden border-r-2 border-b-2 border-neutral-300 rounded-sm ${active?'bg-white border-teal-400':''}`}>
        <input name={name} className='m-[0.15rem] w-full bg-transparent outline-none mx-2 text-justify font-medium text-neutral-600' onFocus={() => setActive(true)} onBlur={() => setActive(false)} onChange={onChange} value={value} />
      </div>
      {/* tes */}
    </div>
  )
}

export default DataEdit
import React from 'react'

export default function Input({children,...props}) {
  return (
   <>
   <div className='mb-3'>
     <label>{children}</label>
   </div>
   
  <div className='mb-3'>
    <input {...props} />
  </div>

   </>
  )
}

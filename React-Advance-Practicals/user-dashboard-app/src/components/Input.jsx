import React, { forwardRef } from 'react'

const Input = forwardRef(({children,...props}, ref) => {
  return (
   <>
   <div className='mb-3'>
     <label>{children}</label>
   </div>
   
  <div className='mb-3'>
    <input {...props} ref={ref} />
  </div>

   </>
  )
})

export default Input;

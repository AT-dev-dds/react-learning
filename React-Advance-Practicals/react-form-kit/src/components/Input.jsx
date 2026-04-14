import React from 'react'

export default function Input({label,type,name,...props}) {
  return (
    <>
    <label htmlFor="name">{label}</label>
    <input type={type} name={name} {...props} />
    </>
  )
}

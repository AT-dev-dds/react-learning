import React from 'react'

export default function Button({label,color,onClick }) {

    const className=`btn btn-${color}`
  return (
    <>
    <button type="button" onClick={onClick} className={className} >{label}</button>
    </>
  )
}

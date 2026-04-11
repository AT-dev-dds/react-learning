import React from 'react'

export default function ListWithClickEvent() {

    const Company=["Geeks","For","Geeks"];
    
    const handleClick=(company)=>{
        alert(`You clicked on ${company}`)
    }
  return (
 <>

    {
    Company.map((company,index)=>{
        return <button className="btn btn-primary text-white" key={index} onClick={()=>handleClick(company)}>{company}</button>
    })
 }
 
 </>
  )
}

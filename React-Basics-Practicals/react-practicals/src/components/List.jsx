import React from 'react'

export default function List() {

    const users=[
        {name:"Ayush",age:20},
        {name:"Hiren",age:55},
        {name:"Golu",age:24}
    ]

  return (
   <>
   
    <ul>
{
    users.map((user,index)=><li key={index}>{user.name} is {user.age} years old.</li>)
}
    </ul>
   
   </>
  )
}

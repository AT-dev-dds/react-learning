import React,{useContext} from 'react'
import { UserContext} from './UserContext.jsx'
import Header from './Header.jsx'

export default function Home() {

    const names=useContext(UserContext)
  return (
    <div>
      This is Home page of {names};

      <Header/>
    </div>
  )
}

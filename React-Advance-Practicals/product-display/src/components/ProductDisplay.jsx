import React from 'react'
import FetchApi from '../services/fetchApi.js'
export default function ProductDisplay() {

    const {data,loading,error}=FetchApi();

     if(loading) return <h1>Loading...</h1>

     if(error) return <h2>{error}</h2>
  return (
   <>
   {

    
    data.map((item)=><div key={item.id}>
        {
           
           <h1>{item.title}</h1>
        
           

        }
        
    </div>)
   }
   </>
  )
}

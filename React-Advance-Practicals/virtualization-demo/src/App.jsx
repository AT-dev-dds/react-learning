import {FixedSizeList as List} from 'react-window'

console.log(List)
import './App.css'

 //Step : 1
  const users=Array.from({length:10000},(_, index)=>{
    return{
      id: index,
      name: `User: ${index}`
    };
  });

 // Step : 2

 const row=({index,style})=>{
 
  const user=users[index];

  return(
    <div style={style}>
       <div style={{padding:"10px", borderBottom:"1px solid black"}}>
          {user.name};
       </div>
    </div>
  )
 }



function App() {
 
 
  return (
    <>
      <div>
    
      <h2>Virtualised User List</h2>

      <List
      height={400}
      width={300}
      itemSize={50}
      itemCount={users.length}>

        {row}

      </List>

      </div>
    </>
  )
}

export default App

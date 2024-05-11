import { useState } from 'react'     // import hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //let counter = 15 - updating the variable but not propogate in UI
   let[counter,setCounter] = useState(15)

   //setCounter is a method that update the "counter" variable
   
  const addValue = ()=>{
    //counter = counter+1
    setCounter( (prevCounter) => prevCounter+1)
    setCounter( prevCounter => prevCounter+1)
    setCounter( prevCounter => prevCounter+1)
   setCounter( prevCounter => prevCounter+1)   //19

    //prevCounter last update value ko fetch krta h ,and add value by 1 increment
  // jb bhi callback ke through aata h to usko phle completely execute krne ke baad dusra call aata h

    //setCounter(counter+1)
    //console.log("clicked", counter);
  }

  const removeValue= ()=>{
    setCounter(counter-1)
   }

  return (
    <>
     <h1>Basics of React</h1>
     <h2>Counter Value:{counter}</h2>

     <button onClick={addValue}>Add Value {counter}</button>
     <br/>
     <button onClick={removeValue}>Remove Value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App

//UI ke andar kya kuch cheeje update ho rhi h y ham decide nhi krenge, React krega
//React - variable ke update pr react krti h,control the UI updation
//UI provides some methods- called hooks- through hook react update data

// hooks-
// useState - it is responsible for state change - this change is propogate in UI (dom)
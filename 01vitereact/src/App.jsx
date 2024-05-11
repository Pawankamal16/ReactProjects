import Temp from "./Temp"



function App() {

  const username = ",Bro"
  return (
    // <temp />
   // <h1>Ramji </h1>  - export only one element - gives error , but we can create div and inside div we can bind all elements
   // <> </> - we cal also remove div - also work- called fragment
   // {} - evalueted expression- outcome of  js

   <>
      <Temp />
      <h1>This is my temp file {username}</h1> 
      <p>and work well with fragment</p>
   </>

  );
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function myApp(){
  return (
    <div>
      <h1>Custom APP !</h1>
    </div>
  );
}


// const ReactElement = {
//   //making tree structure of elemnets
//   type :'a',
//   props: {
//       href: "https://google.com",
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotheruser = "Pawan kamal"

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google',
  anotheruser 
  // at the end inject the variable if we want
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
   //AnotherElement
   ReactElement
   //<App/>

)

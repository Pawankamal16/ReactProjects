import { useState,useEffect } from 'react'

import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode,setThemeMode] = useState("light")

  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme= ()=>{
    setThemeMode("dark")
  }

  //actual change in theme

  useEffect( ()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  //if any change in themeMode, then add dependency "themeMode in array inside useeffect, so that we can again run useEffect"

  return (
  
  
    <ThemeProvider value= {{themeMode,lightTheme,darkTheme}}>

           <div className="flex flex-wrap min-h-screen items-center bg-green-600">
                <div className="w-full"> 

                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        { /* theme button*/ }
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       { /* card*/ }
                       <Card/>
                    </div>

                </div>
            </div>

    </ThemeProvider>

  )
}

export default App

import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Card from './components/card'

export function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "PAWAN",
    age: 23
  }

  let myarr = [1,2,3];

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card  username= "pawankamal16" btnText = "click me" />
     {/* <Card  username= "PAWAN KAMAL" someObj = {myObj} /> */}

     <Card username= "Ramji" />

  
     {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://i.pinimg.com/564x/9b/a2/57/9ba25796112cad616be27e473ae1e149.jpg" alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

    </>
  )
}


import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {


  return (
    <div className='text-center'>
      <h1 className ="text-black text-center w-full flex items-center justify-center">Learn about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App

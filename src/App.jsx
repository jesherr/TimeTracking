import { useState } from 'react'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState('')

  return (
    <div className='w-full md:w-4/5 m-auto h-screen md:flex md:items-center md:justify-items-center ' >
      <Main className= 'flex-1' w/>
    </div>
  )
}

export default App

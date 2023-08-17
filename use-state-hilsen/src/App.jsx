import './App.css'
import { useState } from 'react'

function App() {

  const [name, setName] = useState('Lars')

  return (
    <>
    <p>Send en hilsen til {name}</p>
    <input type='text' onChange={(event) => setName(event.target.value)} />
    </>
  )
}

export default App

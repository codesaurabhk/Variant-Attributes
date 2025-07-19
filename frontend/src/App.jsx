import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Variant from './component/Variant'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Variant />
    </>
  )
}

export default App

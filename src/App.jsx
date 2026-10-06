import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Ludo from './Ludo'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Ludo/>
  </>
  )
}

export default App

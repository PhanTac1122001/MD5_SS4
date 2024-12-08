import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeCodeForm from './components/EmployeeCodeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EmployeeCodeForm/>
    </>
  )
}

export default App

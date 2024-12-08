import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeForm from './components/EmployeeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EmployeeForm/>
    </>
  )
}

export default App

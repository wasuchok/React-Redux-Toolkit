import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter1 from './components/Counter1'
import Count from './components/Count'
import Counter2 from './components/Counter2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Redux Toolkit Learning</h1>

      <div className="card">
        <Counter1 />
        <Count />
        <Counter2 />
      </div>


    </div>
  )
}

export default App

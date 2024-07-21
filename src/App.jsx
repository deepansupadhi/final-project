import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>klnvlgknblg</h1> */}
        <Nav />
        < Home />
        < Footer />
    </>
  )
}

export default App

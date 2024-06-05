import { useState } from 'react'
import './App.css'
import Card from "./Components/Card"
import Hero from "./Components/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    {count}
    <button onClick={() => setCount(count + 1)}>+</button>
    <Card
    image="https://i.redd.it/1u06dqwp3gv91.jpg"
    name="Drake"
    city="Toronto"
    job="Rapper"
    />

    <Card
    image="https://yt3.googleusercontent.com/V4FqOieQ9y9dnErXPUZNWl1hyLafxIK7F55n5M8LVhPBmEou8kAbNuMlUZx23DoJHvH1sWG56No=s900-c-k-c0x00ffffff-no-rj"
    name="Kenderick Lamar"
    city="Compton"
    job="Rapper"
    />
    
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './data.js'
import Card from "./Card.jsx"
import Nav from "./Nav.jsx"

function App() {
  const [count, setCount] = useState(0)
  const cardData = data.map(item => {
    return (
      <Card 
      imageUrl={item.imageUrl}
      googleMapsUrl={item.googleMapsUrl}
      title={item.title}
      location={item.location}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      />
    )
  })
  return (
    <div className="App">
      <Nav />
      <div>
        {cardData}
      </div>
    </div>
  )
}

export default App

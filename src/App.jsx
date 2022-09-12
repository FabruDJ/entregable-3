import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ResidentItem from './components/ResidentItem'

function App() {

  const [allLocations, setAllLocations] = useState({})
  const randomNumber = Math.floor(Math.random()*126) + 1
  const [locationId, setLocationId] = useState('')
  const [locationResidents, setLocationResidents] = useState(allLocations.residents)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomNumber}`)
      .then(res => setAllLocations(res.data))
  }, [])

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${locationId}`)
      .then(res => setAllLocations(res.data))
  }

  console.log(allLocations)

  return (
    <div className="App">
      <h1>Rick And Morty Wiki</h1>
      <div className="btn-area">
        <input 
          type="text"
          value={locationId}
          onChange={e => setLocationId(e.target.value)}
        />
        <button onClick={searchLocation}>Search</button>
      </div>
      <div className="location-info">
        <div className="location-name">
          <p><b>Name: </b></p>
          <p>{allLocations.name}</p>
        </div>
        <div className="location-type">
          <p><b>Type: </b></p>
          <p>{allLocations.type}</p>
        </div>
        <div className="location-dimension">
          <p><b>Dimension:</b></p>
          <p>{allLocations.dimension}</p>
        </div>
      </div>
      <ul className='locations-grid'>
        {
          allLocations.residents?.map(resident => (
            <ResidentItem
              url={resident}
              key={resident}
              />
          ))
        }
      </ul>
    </div>
  )
}

export default App

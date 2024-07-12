import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(puppies)
  
  return (
    <div>
      <div className = 'featured-pup-container'>
        {featuredPup && (
          <div className = 'featured-pup-details'>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>

      <div className = 'puppy-list'>
        {puppies.map((puppy) => (
          <p className='puppy-name'
            key={puppy.id}
            onClick={()=> {setFeatPupId(puppy.id)}}
          >
            {puppy.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default App

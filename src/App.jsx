import React, { Component } from 'react'
import './adrian.css';
import PersonCard from './components/PersonCard';
import people from './data/people';

export class App extends Component {
  render() {
    return (
      <div className='container my-3 p-3 ' >
        {

          // an overload is a method that does the exact same thing but takes differnt perameters 
          people.map((person,idx) => {
            return(
              // this pulls PersonCard constructor 
              <PersonCard
                key = {idx}
                firstName={person.firstName}
                lastName={person.lastName}
                age={person.age}
                hairColor={person.hairColor}
              
              />
            )
          })
        }
      </div>
    )
  }
}

export default App
 
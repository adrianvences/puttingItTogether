import React, { Component } from 'react'


// this is the class for PersonCard, what generates each container
export class PersonCard extends Component {

  // this does a state for age 
  constructor(props){
    super(props);
    this.state = {
      age : this.props.age,
    }

  }


  render() {
    // this const elimnates the need to use this.props
    const {firstName,lastName,hairColor} = this.props;

    // const made for age state
    const {age} = this.state;

    // this is the function for adding a 1 to the birthday setState is a method for changing state
    const birthday = () => this.setState({age: this.state.age + 1});
    return (
      <div className='card'>
        
      <div className="card-body bg-danger mb-3">
        
        <h2>{lastName}, {firstName}</h2>
        <p className="card-text">Age: {age}</p>
        <p className="card-text">Hair Color: {hairColor}</p>

      {/* the onClick is invoking the birthday function  */}
        <button className="btn btn-success" onClick={birthday}>birthday button for {firstName} {lastName} </button>
      </div>
      </div>
    )
  }
}
// we have to export to be able to use is app
export default PersonCard

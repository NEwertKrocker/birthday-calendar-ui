
import React, { Component } from 'react';
import './App.css';
import { months } from '../../months_data';
import { getBirthdays } from '../apiCalls'
import Months from '../Months/Months.js'
import Form from '../Form/Form.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      birthdays: []
    }
  }

  componentDidMount = () => {
    getBirthdays()
    .then(data => {this.setState({ birthdays: data })})
  }

  render () {
  return (
    <div className="App">
      <h1>Birthdays</h1>
      <div className='bday-form'>
        <Form />
      </div>
      <div className='bday-container'>
        <Months birthdays={this.state.birthdays}/>
      </div>
    </div>
  );
  }
}

export default App;

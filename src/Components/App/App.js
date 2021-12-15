
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

  addBday = (bday) => {
    const newBday = {...bday, id: Date.now()}
    const birthdays = [...this.state.birthdays, newBday]
    this.setState({ birthdays })
  }

  render () {
  return (
    <div className="App">
      <h1>Birthdays</h1>
      <div className='bday-form'>
        <Form addBday={this.addBday}/>
      </div>
      <div className='bday-container'>
        <Months birthdays={this.state.birthdays}/>
      </div>
    </div>
  );
  }
}

export default App;

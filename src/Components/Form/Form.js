import React, { Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      month: '',
      day: '',
    }
  }

  handleChange = (event) => {
      const {name, value} = event.target
      this.setState({[name]: value})
    }

  handleSubmit = (event) => {
    event.preventDefault();
    const newBday = {
      name: this.state.name,
      month: parseInt(this.state.month),
      day: parseInt(this.state.day)
    }
    this.props.addBday(newBday)
    this.clearFields();
  }

  clearFields = () => {
    this.setState({
      name: '',
      month: '',
      day: '',
    })
  }

  render(){
    return (
      <form className='form-wrapper' onSubmit={this.handleSubmit}>
        <label for='name'>Name:</label>
        <input id='name'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}></input>
        <label for='month'>Month:</label>
        <input
          id='month'
          name='month'
          value={this.state.month}
          onChange={this.handleChange}></input>
        <label for='day'>Day:</label>
        <input
          id='day'
          name='day'
          value={this.state.day}
          onChange={this.handleChange}></input>
        <button type='button' className='add-bday-btn' onClick={this.handleSubmit}>Add this birthday!</button>
      </form>
    )
  }
}

export default Form;

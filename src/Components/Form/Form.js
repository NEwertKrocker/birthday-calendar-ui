import React, { Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <div className='form-wrapper'>
        <label for='name'>Name:</label>
        <input id='name'></input>
        <label for='month'>Month:</label>
        <input id='month'></input>
        <label for='day'>Day:</label>
        <input id='day'></input>
        <button type='button'>Add this birthday!</button>
      </div>
    )
  }
}

export default Form;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
}

function App() {
  return (
    <div className="App">
      <form className='form'>
        <input type = 'text' id = 'title' name = 'title' onChange={this.handleChange}></input>
        <label htmlFor = 'title'>Title</label>
        <textarea type = 'text' id = 'desc' name = 'desc' onChange={this.handleChange}></textarea>
        <label htmlFor = 'desc'>Description</label>
        <input type = 'datetime-local' id = 'date' name = 'date' onChange={this.handleChange}></input>
        <label htmlFor = 'date'>Date and time</label>
        <select id = 'prio' name = 'prio' onChange={this.handleChange}>
          <option value = 'High'>High</option>
          <option value = 'Mid'>Mid</option>
          <option value = 'Low'>Low</option>
        </select>
        <input type = 'submit' value = 'Submit'></input>
      </form>
    </div>
  );
}

export default App;

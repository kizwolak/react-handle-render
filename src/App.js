import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: '',
      id: '',
      type: '',
    }

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

  render() {
    return (
      <label htmlFor = {this.props.id}>
      {this.props.name}
      <input type = {this.props.type} id = {this.props.id} name = {this.props.name} onChange = {this.handleChange}></input>
      </label>
    )
  }
}

function App() {
  return (
    <div className="App">
      <form className='form'>
        <Task type={'text'} id={'title'} name={'Title'}/>
        <Task type={'textarea'} id={'desc'} name={'Description'}/>
        <Task type={'datetime-local'} id={'date'} name={'Date'}/>
        <label htmlFor = 'prio'>Priority
        <select id = 'prio' name = 'prio'>
          <option value = 'High'>High</option>
          <option value = 'Mid'>Mid</option>
          <option value = 'Low'>Low</option>
        </select>
        </label>
        <input type = 'submit' value = 'Submit'></input>
      </form>
    </div>
  );
}

export default App;

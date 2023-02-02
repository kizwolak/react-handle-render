import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Overview from './components/Overview';

class Task extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: '',
    //   name: '',
    //   id: '',
    //   type: '',
    // }

    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   const value = event.target.value;
  //   const name = event.target.name;

  //   this.setState({
  //     [name]: value
  //   },
  //   console.log(value));
  // }

  render() {
    return (
      <label htmlFor = {this.props.id}>
      {this.props.name}
      <input type = {this.props.type} id = {this.props.id} name = {this.props.name} onChange = {this.props.onChange}></input>
      </label>
    )
  }
}

function App() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [prio, setPrio] = useState('');
  const tasks = [];
  // const titleContainer = useRef();
  // const descContainer = useRef();
  // const dateContainer = useRef();
  // const prioContainer = useRef();
  const overview = document.getElementById('overview');
  // lift state to be sent to an array that will pass tasks into the generator
  function handleSubmit(e) {
    e.preventDefault();
      // setTitle(document.querySelector('#title').value);
      // setDesc(document.querySelector('#desc').value);
      // setDate(document.querySelector('#date').value);
      // setPrio(document.querySelector('#prio').value);
    // setTitle(titleContainer.value);
    // setDesc(descContainer.value);
    // setDate(dateContainer.value);
    // setPrio(prioContainer.value);
    console.log(`${title}, ${desc}, ${date}, ${prio}`);
    if (!title || !desc || !date || !prio) return;
    tasks.push({
      title: {title},
      desc: {desc},
      date: {date},
      prio: {prio},
    });    
    console.log(`tasks: `, tasks);
  }
  const GenerateAll = ({tasks}) => (
    <div>
      {tasks.map(task => (
        <div key={task.title}>
        {console.log(task)}
        <Overview title = {task.title} desc = {task.desc}  date = {task.date} prio = {task.prio}/>
        </div>
      ))}
    </div>
  );
  return (
    <div className="App">
      <form className='form' onSubmit={e => e.preventDefault()}>
        <Task type={'text'} id={'title'} name={'title'} onChange = {(e) => {setTitle(e.target.value)}}/>
        <Task type={'textarea'} id={'desc'} name={'description'} onChange = {e => setDesc(e.target.value)}/>
        <Task type={'datetime-local'} id={'date'} name={'date'} onChange = {e => setDate(e.target.value)}/>
        <label htmlFor = 'prio'>Priority
        <select id = 'prio' name = 'prio' onChange = {e => setPrio(e.target.value)}>
          <option value = 'High'>High</option>
          <option value = 'Mid'>Mid</option>
          <option value = 'Low'>Low</option>
        </select>
        </label>
        <button type = 'button' onClick={handleSubmit}>Submit</button>
      </form>
      <div>
    </div>
    <GenerateAll tasks={tasks} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Overview from './components/Overview';

class Task extends React.Component {
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
  const taskList = [];
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [prio, setPrio] = useState('');
  const [tasks, setTasks] = useState(taskList);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`${title}, ${desc}, ${date}, ${prio}`);
    if (!title || !desc || !date || !prio) return;
    setTasks(oldArray => [...oldArray, <Overview title = {title} desc = {desc} date = {date} prio = {prio}/>
  ]);    
    console.log(`tasks: `, tasks);
  }
  // function GenerateAll(tasks) { 
  //   return (
  //   <div>
  //     {tasks.map((task, index) => (
  //       <div key={index}>
  //       {task}
  //       </div>
  //     ))}
  //   </div>
  //   )};
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
    <Overview tasks={tasks} />
    </div>
  );
}

export default App;

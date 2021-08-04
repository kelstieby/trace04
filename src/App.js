import './App.css';
import { useState } from 'react'

import Form from './components/Form'
import TodoItem from './components/TodoItem'

function App() {
  const [todo, setTodo] = useState([
    {
      title: 'make to do list',
      description: 'write the to do app for day 4 of Trace camp',
      id: 1,
      stillTodo: true
    },
    {
      title: 'be amazing',
      description: 'you got this one down free',
      id: 2,
      stillTodo: false
    }
  ])

  const [filtered, setFiltered] = useState(false)

  const [nextId, setNextId] = useState(3)

  const incrementId = () => {
    setNextId(prevId => prevId + 1)
  }

  const handleAdd = (title, description) => {
    /* add code for adding an item to the list with the input title and description */
    incrementId()
    setTodo(prevTodo => [...todo, {title: title, description: description, id: nextId, stillTodo: true}])
  }

  const [button, setButton] = useState('Show')

  function changeButton () {
      if (button === 'Show') {
          setButton(prevButton => 'Add')
      } else { 
          setButton(prevButton => 'Show')
      }
  }

  const handleTaskCompleted = (id) => {
    setTodo(prevTodo => 
      todo
      .filter.((item) => {item.id === id})
    )
  }

  const filterList = () => {
    if (filtered === true) {
      setFiltered(prevFiltered => false)
    } else {
      setFiltered(prevFiltered => true)
    }
  }

  return (
    <div className="App">
      {/* add a switch to toggle visibility on finished items */}
      <button onClick={changeButton}>{button} To-Do Items</button>
      {/* add dynamic array transformations to components */}
      {button === 'Show' && <div><Form handleSubmit={handleAdd} /></div>}
      {button === 'Add' && <div className="List">
          <h1>To-Do List</h1>
          <button className="btn" onClick={filterList}>Filter out completed tasks</button>
          {//<button className="btn">Sort alphabetically</button>}
          {todo
              .filter((item) => {
                if(filtered === true) {
                  return item.stillTodo
                } else {
                  return true
                }
              })
              .map((item) => (
                <TodoItem title={item.title}
                description={item.description}
                stillTodo={item.stillTodo}
                handleDelete={handleTaskCompleted}  
              />))}
        </div>}
    </div>
  );
}

export default App;
import './TodoItem.css'


const TodoItem = ({ title, description, stillTodo, handleDelete }) => {
  
  const notTodo = (event) => {
    handleDelete()
  }

  return (
    <div className = "items">
      <h3> ~{title} </h3>
      <p> {description} </p>
      {stillTodo && <div><button className="btn" onClick={notTodo}>Task Completed</button></div>}
      {!stillTodo && <div className="done">Task Completed!</div>}
    </div>
  )
}

export default TodoItem
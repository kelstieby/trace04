import './TodoItem.css'


const TodoItem = ({ title, description, id, stillTodo, handleDelete }) => {
  
  const notTodo = (id) => {
    handleDelete(id)
  }

  return (
    <div className = "items">
      <h3> ~{title} </h3>
      <p> {description} </p>
      {stillTodo && <div><button className="btn" onClick={() => notTodo(id)}>Task Completed</button></div>}
      {!stillTodo && <div className="done">Task Completed!</div>}
    </div>
  )
}

export default TodoItem
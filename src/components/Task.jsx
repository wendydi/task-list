import React from 'react'

const Task = ({todo, removeTodo, completeTodo }) => {
  return (
    <div>
          <div className=" m-10 bg-box w-1/4 p-4 rounded-full" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <p className='inline'> - {todo.text}</p>
            <div className='inline ml-5'>
              <input className='mr-2' type="checkbox" onClick={() => completeTodo(todo.id)}></input>
              <button className='hover:text-red-800 transition-colors text-gray-700' onClick={() => removeTodo(todo.id)}> X </button>
            </div>
          </div>
      </div>
  )
}

export default Task
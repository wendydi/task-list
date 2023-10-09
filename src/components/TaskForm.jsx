import { useState } from 'react'

const TaskForm = ({ addTodo }) => {
  const [ task, setTask ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!task) return;
    addTodo(task)
    setTask("");
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className='w-2/3 ml-60 -mt-16 text-xl p-3 rounded-lg' type='text' placeholder='New task...' value={task} onChange={(e)=> setTask(e.target.value)}/>
            <button className="ml-8 text-white px-5 py-2 rounded hover:bg-gray-600 transition-colors bg-black" type="submit">Add</button>
        </form>
    </div>
  )
}

export default TaskForm
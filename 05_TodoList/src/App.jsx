import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom/client'


function App() {
  const [todo, setTodo] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');
  const handleAddButton = () => {
    if(currentTodo.trim()){
      setTodo([...todo,currentTodo.trim()]);
      setCurrentTodo('');
    }
  }

  const handleInputChanges = (e)=>{
    setCurrentTodo(e.target.value);
  }

  const handleDeleteButton = (index)=>{
    setTodo(todo.filter((_,i)=> i !== index))
  }

  useEffect(()=>{
    const handleKeyDown=(e)=>{
      if(e.key === 'Enter'){
        handleAddButton(e);
      }
    }
      document.addEventListener('keydown',handleKeyDown);
  })
  return (
    <>
      <div className='flex items-center justify-center gap-3 bg-gray-600 mx-auto my-5 px-5 py-2 max-w-xl rounded-md'>
        <input type="text"
          className='py-2 w-full rounded-md outline-none px-2 text-blue-700'
          placeholder='Task to perform'
          id=""
          value={currentTodo}
          onChange={handleInputChanges}
        />
        <button className='bg-sky-500 rounded-md px-6 py-2 text-white hover:bg-sky-700'
        onClick={handleAddButton}
        >
          Add
        </button>
      </div>
      <div className='text-white max-w-xl mx-auto flex-col items-center justify-center'>
        {todo.map((todo,index)=>(
          <li key = {index}
          className='flex items-center justify-between my-3'>
          <p>
          {todo}
          </p>
            <button 
            onClick={()=>handleDeleteButton(index)}
            className='bg-red-500 rounded-md px-4 py-2 text-white hover:bg-red-700'>
              Delete
            </button>
          </li>
        )
        )}
      </div>
    </>
  )
}

export default App

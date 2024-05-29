import React, { useState } from 'react';




import './App.css';
const TodoApp = () => {
  const [todos, setTodos] = useState([
    {id:1,taskName:'Learn React',description:'update 1',Status:'not completed'},
    {id:2,taskName:'Learn Redux',description:'update 2',Status:'not completed'},
    {id:3,taskName:'Learn Nodejs', description:'update 3',Status:'not completed'}
  ]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Not Completed');
  const [filterStatus, setFilterStatus] = useState('All');

  const handleAddTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      taskName,
      description,
      status: 'Not Completed',
    };
    setTodos([...todos, newTodo]);
    setTaskName('');
    setDescription('');
  };

  const handleUpdateTodo = (id, newStatus) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };
  const updateTodo = (todoId, updatedTaskName, updatedDescription) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId
        ? {
            ...todo,
            taskName: updatedTaskName,
            description: updatedDescription,
          }
        : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filterStatus === 'All') return true;
    return todo.status === filterStatus;
  });

  return (

    <div>
    
      <h1 style={{textAlign:'center',justifyContent:'center',color:'#23A386'}}>My Todo</h1>
     
      <div>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={e => setTaskName(e.target.value)} style={{borderRadius:'5px',padding:'15px 50px',margin:'20px 50px',border:'2px solid #13AD89'}}
        /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)} style={{borderRadius:'5px',padding:'15px 50px',margin:'20px 50px',border:'2px solid #13AD89'}}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={handleAddTodo} style={{background:'#13AD89',borderRadius:'5px',padding:'15px 32px',margin:'4px 2px',display:'inline-block',}}>Add Todo</button>
      </div>
      
      <div style={{display:'flex',justifyContent:'flex-end',marginBottom:'1rem'}}>
      <p style={{fontSize:'25px'}}>Status Filter:
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{background:'#FFD2D3'}}>
          <option value="All">All</option>
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select></p>
      </div>
     
      {filteredTodos.map(todo => (
     <div className='container' >
    

        
        <div key={todo.id} className="card mx-7 my-5"  style={{width:'25rem',padding:'15px',background:'#CCF5D3'}}>
          <div className='card-body'>
            <div className='col'>
          <p>Task:{todo.taskName}</p>
          <p>Description:{todo.description}</p>

<p>Status: {todo.status}
          <button onClick={() => handleUpdateTodo(todo.id, todo.status === 'Not Completed' ? 'Completed' : 'Not Completed')}>
            {todo.status === 'Not Completed' ? '   Completed' : ' Not Completed'}
          </button></p>
          <button onClick={() => handleDeleteTodo(todo.id)}style={{background:'#F3CBBB',borderRadius:'5px'}}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => updateTodo(todo.id, prompt('New Task Name'), prompt('New Description'))} style={{background:'rgb(22,169,133)',borderRadius:'5px'}}>
              Edit
            </button>
        
        </div>
        </div>
    
       </div>
      
     </div>

      ))}



    </div>
  );
};

export default TodoApp;

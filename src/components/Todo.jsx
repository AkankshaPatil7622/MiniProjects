import React, { useState } from 'react'

function Todo() {

    const [task,setTask] = useState("");
    const [taskArr, setTaskArr] = useState([]);

    function EnterTask(){

    }
    function inputHandler(e){
        
            setTask(e.target.value);

    }

    function submitHandler(e){
        e.preventDefault();
        alert("Task added successfully..")
    }

    function Addtask(){
      setTaskArr(task)
    }
  return (
    <>
         <div className="container vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="card shadow-lg p-4 w-75 rounded-4" style={{ maxWidth: "500px" }}>
        <h2 className="text-center  mb-4 fw-bold" style={{color:"#a53860"}}>To-Do List</h2>

        <form onSubmit={submitHandler} className="d-flex gap-2 mb-4">
          <input
            className="form-control rounded-3"
            type="text"
            placeholder="Enter your task..."
            name='task'
            value={task}
            onChange={inputHandler}
            style={{border:"1px solid #a53860"}}
          />
          <button className="btn px-4 rounded-3" style={{backgroundColor:"#a53860",color:'white'}} onClick={Addtask}>Add</button>
        </form>

        <button className='btn ' style={{backgroundColor:"#a53860",color:'white'}}> Show Completed Task</button>

      </div>
     
    </div>
    
    </>
  )
}

export default Todo
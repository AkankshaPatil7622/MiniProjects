import React, { useState } from 'react'

function UseStateCounter() {
    const [count, setCount] = useState(0)
  return (
    <>
    <h1 className='text-center'>Counter </h1>
    <div className='d-flex justify-content-center align items-center vh-100' >
      
        <div>
            <div className='d-flex justify-content-center align-items-center' style={{height:50,width:300,border:"3px solid black", borderRadius:10}}>{count}</div><br />
        <button className='btn btn-success w-25' onClick={()=>setCount(count+1)}>+</button>&nbsp;&nbsp;
        <button className='btn btn-success w-25' onClick={()=>setCount(count-1)}>-</button>
        </div>
    </div>
    </>
  )
}

export default UseStateCounter
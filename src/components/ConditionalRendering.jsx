import React, { useState } from 'react';
import welcome from '../assets/images/welcome.png'


function ConditionalRendering() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    function changeLog(){
        setIsLoggedIn(true);
    }
  return (
    <>
    <div className='container vh-100'>
        {
            isLoggedIn? <div className='container'>
                <h1 className='text-center'>Welcome Back !!</h1><br />
                <img src={welcome} height={300} width={300} alt="h" className='d-block mx-auto'/>
            </div> : 
            <div>
                <h1 className='text-center'>Please log in</h1>
                <button className='btn btn-primary d-block mx-auto' onClick={changeLog}>Log in </button>    
            </div>
        }
    </div>
    </>
  )
}

export default ConditionalRendering
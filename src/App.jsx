import { useState } from 'react'
import ConditionalRendering from './components/ConditionalRendering'
import UseStateCounter from './components/UseStateCounter'
import ConditionalStyling from './components/ConditionalStyling'
import Todo from './components/Todo'

function App() {
  
  return (
    <>
     <ConditionalRendering />
     <hr />
     <UseStateCounter />
     <hr />
     <ConditionalStyling />
     <hr />
     <Todo />
    </>
  )
}

export default App

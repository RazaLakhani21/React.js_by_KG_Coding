import React from 'react'
import TodoItem from './TodoItem'

function ToDoItems({todoItemsKaObjKoReferKrrha}) {
  return (
    <>
      <div className="items-container">
    {todoItemsKaObjKoReferKrrha.map((item) =>  <TodoItem TodoDate={item.dueDate} TodoName={item.taskName} key={todoItemsKaObjKoReferKrrha}/> )}
        </div>
    </>
  )
}

export default ToDoItems

import React from 'react'
import TodoItem from './TodoItem'
import styles from './ToDoItems.module.css'

function ToDoItems({todoItemsKaObjKoReferKrrha}) {
  return (
    <>
      <div className={`${styles['item-container']}`}>
    {todoItemsKaObjKoReferKrrha.map((item) =>  <TodoItem TodoDate={item.dueDate} TodoName={item.taskName} key={todoItemsKaObjKoReferKrrha}/> )}
        </div>
    </>
  )
}

export default ToDoItems

import React from 'react'

function TodoItem({TodoName, TodoDate}) {



  return (
    <>
       <div className="container">
          <div className="row kg-row">
            <div className="col-6">
              <label>{TodoName}</label>
            </div>
            <div className="col-4">
              <label>{TodoDate}</label>
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-danger kg-button">Delete</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default TodoItem;

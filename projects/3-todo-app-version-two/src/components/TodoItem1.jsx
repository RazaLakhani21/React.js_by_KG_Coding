// Removed "TodoItem2" as we've to make it a single component and not want to create many components like it, as we've learnt about props, so why not implement it !

import React from 'react'

function TodoItem1() {

    

  return (
    <div>
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
    </div>
  )
}

export default TodoItem1

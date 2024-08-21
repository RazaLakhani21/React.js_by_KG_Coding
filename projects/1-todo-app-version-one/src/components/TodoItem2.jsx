import React from 'react'

function TodoItem2() {

    let TodoName = 'Go to College'
    let TodoDate = '04/06/2022'

  return (
    <div>
      <div class="container text-center p-2 g-col-6">
          <div class="row">
            <div class="col-6">
              <label>{TodoName}</label>
            </div>
            <div class="col-4">
              <label>{TodoDate}</label>
            </div>
            <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TodoItem2

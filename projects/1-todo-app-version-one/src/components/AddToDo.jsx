import React from 'react'

function AddToDo() {
  return (
    <div>
      <div class="container text-center p-2 g-col-6">
          <div class="row">
            <div class="col-6">
              <input type="text" placeholder="Enter ToDo here" />
            </div>
            <div class="col-4">
              <input type="date" />
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-success ">Add</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddToDo

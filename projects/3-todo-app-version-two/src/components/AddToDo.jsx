import React from 'react'
import styles from './AddToDo.module.css'

function AddToDo() {
  return (
    <div>
      <div className="container">
          <div className={`${styles['kg-row']} row`}>
            <div className="col-6">
              <input className={styles.input} type="text" placeholder="Enter ToDo here" />
            </div>
            <div className="col-4">
              <input type="date" />
            </div>
            <div className="col-2">
                <button type="button" className={`${styles['kg-button']} btn btn-success`}>Add</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddToDo

import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'

function Footer() {
  
  let date = new Date()

  return (
    <div className="lead">
      <p>This is the current time: {date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
    </div>
  )
}

export default Footer

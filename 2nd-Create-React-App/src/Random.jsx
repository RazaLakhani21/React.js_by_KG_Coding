import React from 'react'

function Random() {
    let randomNumber = Math.random()*100
  return (
    <div>
        <h1 style={{'background-color':'#fff', 'color':'#000'}}>Random Number Generates here: {Math.round(randomNumber)}</h1>
    </div>
  )
}

export default Random

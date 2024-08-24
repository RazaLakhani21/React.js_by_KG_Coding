import React from 'react'

function ErrorMessage({items}) {

  return (
    <>

            {items.length === 0 && <h3>I am Still Hungry !</h3>}
    </>
  )
}

export default ErrorMessage;


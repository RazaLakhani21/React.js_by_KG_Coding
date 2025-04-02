import React from 'react'
import styles from './container.module.css'

function Container({children}) {
    // function Container({children}) <- passing children like this will also work, but for the learning i've let it as it's in the sir's code.
  return (
    <div className={`${styles['contaienr-ma-styling']}`}>
      {children}
    </div>
  )
}

export default Container

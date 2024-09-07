import React from 'react'
import styles from './container.module.css'

function Container(props) {
    // function Container({children}) <- passing children like this will also work, but for the learning i've let it as it's in the sir's code.
  return (
    <div className={`${styles['contaienr-ma-styling']}`}>
      {props.children}
    </div>
  )
}

export default Container

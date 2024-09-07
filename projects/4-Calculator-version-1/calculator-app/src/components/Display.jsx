import React from 'react'
import styles from './Display.module.css';
// ++++ import styles from '../App.module.css'; // This is not an ideal way to call App.module.css to define it.
// so make a separate 'css' file for 'Display.jsx' ++++


function Display() {
  return (
    <>
      <input className={styles.display} type="number" />
    </>
  )
}

export default Display

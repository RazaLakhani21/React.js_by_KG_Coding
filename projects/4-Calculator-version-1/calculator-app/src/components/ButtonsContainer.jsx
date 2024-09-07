import React from 'react'
// import Buttons from './Buttons'
// import buttonStyles from "./Button.module.css"; , we don't have to "import" two different modules !, we can give the styling for buttons in 'buttonContainer's module' only 
import styles from './ButtonsContainer.module.css'

function ButtonsContainer() {

  const Bdata = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.',]
  

  return (
    <>
     <div className={styles.buttonContainer}>

      {Bdata.map(buttonNumbers => <button className={styles.button} >{buttonNumbers}</button> )}

          


        </div> 
    </>
  )
}

export default ButtonsContainer;

// I have deleted 'Button.jsx' and "Button.module.css" files as we have the content of them in the 'ButtonContainer.jsx' filed
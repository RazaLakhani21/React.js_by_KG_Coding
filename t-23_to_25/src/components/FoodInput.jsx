import styles from "./FoodInput.module.css"

function foodInput({handleOnChange}){

    return(<>
    <input className={styles.input} type="text" placeholder="Enter Food Items here" onChange={handleOnChange}/>
    <button className={styles.button}>Add</button>
    </>
    )
    
}

export default foodInput
import styles from "./FoodInput.module.css"

function foodInput(){

    // const handleOnChangeInputField = (event) =>console.log(event.target.value)  👈 this can be removed and can be taken from the parent!

    return(<>
    <input className={styles.input} type="text" placeholder="Enter Food Items here" onChange={handleOnChangeInputField}/>
    <button className={styles.button}>Add</button>
    </>
    )
    
}

export default foodInput
import React from "react";
import styles from "./item.module.css"; // A different way to Import 'css-modules'

// "One Way to use Props"

// function Item(props) {
function Item({foodItem, handleBuyButton}) {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>  
      {/* If Get any Error Change this       👆       back to {foodItem} */}

    <button className={`${styles.button} btn btn-info`} onClick={handleBuyButton}>
          Buy
        </button>
    

    </li>
  );
}

export default Item;

// **** "Second Way to use Props" *****

// function Item(props) {
//   let { foodItem } = props;

//   return <li className="list-group-item">{foodItem}</li>;
// }

// **** "Third Way to use Props" *****

// function Item({ foodItem }) {

//     return <li className="list-group-item">{foodItem}</li>;

//   }

import React from "react";
import styles from "./item.module.css"; // A different way to Import 'css-modules'

// "One Way to use Props"

function Item(props) {
  return (
    <li className={`${styles["kg-item"]}`}>
      <span className={styles["kg-span"]}>{props.foodItem}</span>
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

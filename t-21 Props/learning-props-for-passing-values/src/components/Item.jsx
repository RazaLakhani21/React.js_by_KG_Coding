import React from "react";

// "One Way to use Props"

function Item(props) {
  return <li className="list-group-item">{props.foodItem}</li>;
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
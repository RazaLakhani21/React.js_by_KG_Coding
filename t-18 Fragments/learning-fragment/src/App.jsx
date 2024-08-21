// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"

// function App() {
// //Learning 'Map' after "fragments" !
//   let foodItems = ["Dal","Roti","Green Veggies","Rice","Salad","Ghee"]

//   return (
//     <React.Fragment>
//         // <React.Fragment></React.Fragment> OR <></>  both are Ok to use
//       <h1>Healthy Foods</h1>
//       <ul className="list-group">
//         {foodItems.map(item => <li key={item} className="list-group-item">{item}</li>)} {/* The "key" here is that we have provided any id to the elements of array[foodItems] */}
//       </ul>
//       </React.Fragment>
//   );
// }

// export default App;

// Learning-Conditional-Rendering 👇
// * Displays content based on certain conditions ✔
// * Allows for dynamic UI ✔

// Conditional-Rendering can be done using **3 Methods**
// 1. if-else statements
// 2. Ternary Operator
// 3. Logical Operator

// ++++++++++++++ 1. if-else statements +++++++++++++

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   let foodItems = [];
//   // let foodItems = ["Dal","Roti","Green Veggies","Rice","Salad","Ghee"]
  
//   if (foodItems.length === 0) {
//     return <h1>I am Still Hungry</h1>; ****** if-else Statements *****
//   }

//   return (
//     <>
//       <h1>Healthy Foods</h1>
//       <ul className="list-group">
//         {foodItems.map((item) => (
//           <li key={item} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

// ++++++++++++++ 2. Ternary Operator +++++++++++++


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
      // let foodItems = [];
//   let foodItems = ["Dal","Roti","Green Veggies","Rice","Salad","Ghee"]
  

//   return (
//     <>
//       <h1>Healthy Foods</h1>

//       {foodItems.length === 0 ? <h1>I am Still Hungry</h1> : null} {/* **** Ternary Operator **** */}

//       <ul className="list-group">
//         {foodItems.map((item) => (
//           <li key={item} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;


// ++++++++++++++ 3. Logical Operator +++++++++++++


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = [];
  // let foodItems = ["Dal","Roti","Green Veggies","Rice","Salad","Ghee"]
  

  return (
    <>
      <h1>Healthy Foods</h1>

      {foodItems.length === 0 && <h1>I am Still Hungry</h1>} {/* **** Logical Operator "it works on the condition of Truthy and Falsy values, Falsy values are:- null, undefined, empty, zero'0', NaN(Not a Number)." **** */}

      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
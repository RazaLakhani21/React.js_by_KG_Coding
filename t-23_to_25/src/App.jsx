import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
// import PracticeProps from "./components/PracticeProps";
import { useState } from "react";

function App() {
  // let foodItems = []
  let foodItems = ["Dal", "Roti", "Green Veggies", "Rice", "Salad", "Ghee"];
  // const properties = "FaceShape : Oval, Hair-Cut : Buzz-cut, eyes : Brown"

  let textStateArr = useState("Food Item Entered By User");
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1];
  // console.log(`Current value of textStateArr is ${textToShow}`);

  // Now Starting ⭐State Management⭐ for doing the repaint of the dom and putting the texToShow's target.value in the place instead of "Food Item Entered By User"

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems} />
      </Container>

      <Container>
        {/* This is the ⭐Passing Children to the Container⭐  */}
        <p>
          Above is the list of Healthy Foods that are Good for Everyone's Health
          and well being
        </p>
      </Container>
    </>
  );
}

export default App;

// I did some practice on props, as i had to do more learning.

{
  /* <h1>Practicing Props</h1> */
}
{
  /* 
      <PracticeProps
        text={{ FaceShape: "Oval", HairCut: "Buzz-cut", eyes: "Brown" }}
        singleProp="Hello World !" 
      />
      <PracticeProps
        text={{ name1: "Peter", name2: "Bruce", name3: "John" }}
        singleProp="Hello Peter" // this will work and also give the expected output !
      />
      <PracticeProps
        text={{ name1: "Peter", name2: "Bruce", name3: "John" }} 
        // singleProp={`Hello their, ${text.name1}`} // Cannot Introduce props like this, as the Error of :- "text will not be defined here"
      />*/
}
{
  /* <PracticeProps name = "Ayush" color = "Red" height prop = {properties}/> */
}
{
  /* // Practiced More About Props, now it's time to implement it in a ToDO project */
}

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import './App.css'

function App() {
  // let foodItems = []
  let foodItems = ["Dal", "Roti", "Green Veggies", "Rice", "Salad", "Ghee"];

  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage items = {foodItems} />
      <FoodItems items = {foodItems} />
    </>
  );
}

export default App;
 
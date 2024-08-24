import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItem1 from "./components/TodoItem1";
import "./App.css";

function App() {


  let TodoName = "Buy Milk";
  let TodoDate = "04/06/2022";

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <div className="items-container">
          <TodoItem1 />
        </div>
      </center>
    </>
  );
}

export default App;

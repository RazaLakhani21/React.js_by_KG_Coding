import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      id: 0,
      taskName: "Buy Milk",
      dueDate: "04/06/2023"
    },
    {
      id: 2,
      taskName: "Go To College",
      dueDate: "15/12/2023"
    },
    {
      id: 3,
      taskName: "Go to Gyyyymmmm",
      dueDate: "Right now"
    }
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <ToDoItems key={todoItems["1","2","3"]} todoItemsKaObjKoReferKrrha={todoItems} />
      </center>
    </>
  );
}

export default App;

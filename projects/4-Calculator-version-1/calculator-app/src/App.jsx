import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
// import Buttons from "./components/Buttons";

function App() {
 
  return (
    <>
      <div className={styles.calculator}>
        <Display />
        <ButtonsContainer />
      </div>
    </>
  );
}

export default App;


import "./global.css";
import styles from "./App.module.css";
import { Task } from "./components/Task";

function App() {
  return (
    <div>
      <header className={styles.header}>
        <h1>ToDo</h1>
      </header>

      <div className={styles.wrapper}>
        <Task />
      </div>
    </div>
  );
}

export default App;

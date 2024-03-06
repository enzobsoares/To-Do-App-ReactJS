import styles from "./ToDo.module.css";
import { Trash } from "phosphor-react";
import { Content } from "./Content";

interface ToDoProps {
  data: number;
  content: string;
  tasksIsComplet: boolean;
  onDeleteTask: (task: number) => void;
  onCheckTask: (task: number) => void;
}

export function ToDo({
  content,
  data,
  onDeleteTask,
  onCheckTask,
  tasksIsComplet,
}: ToDoProps) {
  function handleDeleteTask() {
    onDeleteTask(data);
  }

  function handleCheckTask() {
    onCheckTask(data);
  }

  return (
    <div className={styles.ToDo}>
      <label className={styles.customCheckbox}>
        <input onClick={handleCheckTask} type="checkbox"></input>
        <span className={styles.checkmark}></span>
        <i className="fas fa-check"></i>
        {/*Font Welsome*/}
      </label>

      <div className={styles.taskContent}>
        <Content hasSubline={tasksIsComplet} content={content} />
      </div>

      <button onClick={handleDeleteTask}>
        <Trash size={17} />
      </button>
    </div>
  );
}

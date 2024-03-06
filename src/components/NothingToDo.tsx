import styles from "./NothingToDo.module.css";

interface NothingToDoProps {
  Clipboard: string;
}

export function NothingToDo({ Clipboard }: NothingToDoProps) {
  return (
    <div className={styles.withoutTaskToDo}>
      <img src={Clipboard}></img>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

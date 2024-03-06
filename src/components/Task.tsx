import styles from "./Task.module.css";
import Clipboard from "../assets/Clipboard.svg";
import { ToDo } from "./ToDo";
import { useState, ChangeEvent } from "react";
import { NothingToDo } from "./NothingToDo";

interface TasksProps {
  id: number;
  content: string;
  isComplet: boolean;
}

export function Task() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  // Estado que vai armazenar o valor do input text
  const [newTaskText, setNewTaskText] = useState<TasksProps>({});

  // Constante que armazena quantas tarefas foram criadas
  const TasksCreated = tasks.length;

  // Constante que armazena quantas tarefas foram concluídas
  const tasksCompleted = tasks.filter((task) => task.isComplet === true).length;

  function handleCreateTask() {
    event?.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText({ content: "" });
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    if (tasks.length != 0) {
      // Função anônima que vai encontrar o maior id do Tasks
      const higherId = tasks.reduce(function (prev, current) {
        return prev.id > current.id ? prev : current;
      }, 0);

      setNewTaskText({
        id: higherId.id + 1,
        content: event?.target.value,
        isComplet: false,
      });
    } else {
      setNewTaskText({
        id: 1,
        content: event?.target.value,
        isComplet: false,
      });
    }
  }

  function deleteTask(taskToDelete: number) {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task.id != taskToDelete;
    });

    setTasks(tasksWithoutDeleteOne);
  }

  function checkTask(taskToCheck: number) {
    const NewTasks = tasks.map((task) => {
      if (task.id == taskToCheck) {
        if (task.isComplet == false) {
          task.isComplet = true;
        } else {
          task.isComplet = false;
        }
      }
      return task;
    });
    setTasks(NewTasks);
  }

  return (
    <div className={styles.task}>
      <form onSubmit={handleCreateTask}>
        <div className={styles.createTask}>
          <input
            value={newTaskText.content}
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            required
          />
          <button type="submit">Criar</button>
        </div>
      </form>

      <div className={styles.taskInfo}>
        <header>
          <p>
            Tarefas criadas<span>{TasksCreated}</span>
          </p>
          {TasksCreated == 0 && (
            <p>
              Concluídas<span>{TasksCreated}</span>
            </p>
          )}
          {TasksCreated > 0 && (
            <p>
              Concluídas
              <span>
                {tasksCompleted} de {TasksCreated}
              </span>
            </p>
          )}
        </header>

        <div className={styles.tasksToDo}>
          {tasks.length == 0 && <NothingToDo Clipboard={Clipboard} />}

          {tasks.map((task) => {
            return (
              <ToDo
                key={task.id}
                data={task.id}
                tasksIsComplet={task.isComplet}
                content={task.content}
                onDeleteTask={deleteTask}
                onCheckTask={checkTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

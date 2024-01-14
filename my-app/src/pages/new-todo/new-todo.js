import { useState } from "react";
import { Button } from "../../components/reused/button/button";
import { useNavigate } from "react-router-dom";
import { request } from "../../utils/request";
import styles from "./new-todo.module.css";

export const NewTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate();

  const saveTodo = () => {
    if (newTodo === "") {
      return;
    }

    request("/addTodo", "POST", { title: newTodo, comment: newComment }).then(
      ({ error, data }) => {
        if (error) {
          console.error(error);
        }
        navigate("/");
      }
    );
  };

  return (
    <div className={styles.wrapper}>     
      <div className={styles.item}>
        <span>Задача:</span>
        <textarea
          className={styles.textArea}
          value={newTodo}
          onChange={({ target }) => setNewTodo(target.value)}
        ></textarea>
      </div>
      <div className={styles.item}>
        <span>Коментарий:</span>
        <textarea
          className={styles.textArea}
          value={newComment}
          onChange={({ target }) => setNewComment(target.value)}
        ></textarea>
      </div>
      <Button name="Сохранить" heandler={saveTodo} />
    </div>
  );
};

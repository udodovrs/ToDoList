import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { request } from "../../utils/request";
import { searchSelector } from "../../selectors/search-selector";
import { CartTodo } from "./components/cart-todo/cart-todo";
import styles from "./todos.module.css";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const search = useSelector(searchSelector);

  useEffect(() => {
    setIsLoaded(true);    
    request("/getTodos", "POST", search).then(({ error, data }) => {
      if (error) {
        console.error("Ошибка получения списка задач");
      }
      setTodos(data);

      setIsLoaded(false);
    });
  }, [search.updateSearch, search]);

  return (
    <div className={styles.wrapper}>
      {isLoaded
        ? "Загрука задач..."
        : todos.length === 0
        ? "Задачи по данному запросу не найдены"
        : todos.map((item) => <CartTodo key={item._id} item={item} />)}
    </div>
  );
};

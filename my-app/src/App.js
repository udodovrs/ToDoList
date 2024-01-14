import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { NewTodo } from "./pages/new-todo/new-todo";
import { Todos } from "./pages/todos/todos";
import { ChooseStatus } from "./components/choose-status/choose-status";
import { Todo } from "./pages/todo/todo";
import styles from "./App.module.css";


export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.wrapperContent}>
        <ChooseStatus />
        <div className={styles.wrapperRoutes}>
          <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/Todo/:id" element={<Todo />} />
            <Route path="/newTodo" element={<NewTodo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

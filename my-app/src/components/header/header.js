import { Link } from "react-router-dom";
import { ACTION_TYPE } from "../../constants/action-type";
import { useDispatch } from "react-redux";
import styles from "./header.module.css";
import { BtnBack } from "../reused/button-back/button-back";

export const Header = () => {
  const dispatch = useDispatch();

  const heandleSearch = ({ target }) => {
    dispatch({
      type: ACTION_TYPE.SET_SEARCH_PHRASE,
      payload: target.value,
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperLogoSearch}>
          <Link to="/" className={styles.link}>
            ToDoList
          </Link>
          <input
            type="text"
            className={styles.input}
            onChange={heandleSearch}
            placeholder="Поиск..."
          />
        </div>
        <div className={styles.wrapperNewTodoBntBack}>
          <BtnBack />
          <Link to="/newTodo" className={styles.newTodo}>
            <div className={styles.cross}>+</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

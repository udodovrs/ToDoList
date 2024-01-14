import { request } from "../../../../utils/request";
import { useDispatch } from "react-redux";
import { ACTION_TYPE } from "../../../../constants/action-type";
import { useNavigate } from "react-router-dom";
import styles from "../cart-todo/cart-todo.module.css";

export const CartTodo = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let wrapperStyle;

  switch (item.status) {
    case "postpone":
      wrapperStyle = "wrapperPostpone";
      break;
    case "done":
      wrapperStyle = "wrapperDone";
      break;
    default:
      wrapperStyle = "wrapperAtWork";
  }

  const deleteTodo = () => {
    request(`/deleteTodo/${item._id}`, "DELETE").then(({ error, date }) => {
      dispatch({ type: ACTION_TYPE.UPDATE_SEARCH });
    });
  };

  return (
    <div
      className={styles[`${wrapperStyle}`]}
      onDoubleClick={() => navigate(`/Todo/${item._id}`)}
    >
      <div className={styles.title}>{item.title}</div>
      <div className={styles.wrapperControlboard}>
        <div
          className={styles.itemControl}
          title="Удалить задачу"
          onClick={deleteTodo}
        >
          🗑️
        </div>
        <div
          className={styles.itemControl}
          title="Редактировать задачу"
          onClick={() => navigate(`/Todo/${item._id}`)}
        >
          ✏️
        </div>
      </div>
    </div>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { searchSelector } from "../../selectors/search-selector";
import { ACTION_TYPE } from "../../constants/action-type";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./chose-status.module.css";

export const ChooseStatus = () => {
  const search = useSelector(searchSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation()
  const {pathname} = location
 

  const heandleChoose = (typeAction) =>{
    dispatch({ type: typeAction })

    if(pathname === '/') {
      return
    }
    
    navigate('/')

  }

  return (
    <div className={styles.wrapper}>
      <div
        className={search.status === "" ? styles.activeChoose : styles.choose}
        onClick={() => heandleChoose(ACTION_TYPE.SET_ALL_TODO)}
      >
        все задачи
      </div>
      <div
        className={
          search.status === "atWork" ? styles.activeChoose : styles.choose
        }
        onClick={() => heandleChoose(ACTION_TYPE.SET_ATWORK)}
      >
        в работе
      </div>
      <div
        className={
          search.status === "postpone" ? styles.activeChoose : styles.choose
        }
        onClick={() => heandleChoose(ACTION_TYPE.SET_POSTPONED)}
      >
        отложенные
      </div>
      <div
        className={
          search.status === "done" ? styles.activeChoose : styles.choose
        }
        onClick={() => heandleChoose(ACTION_TYPE.SET_DONE)}
      >
        завершенные
      </div>
    </div>
  );
};

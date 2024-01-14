import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { request } from "../../utils/request";
import styles from "./todo.module.css";
import { Switch } from "../../components/reused/switch/switch";
import { Button } from "../../components/reused/button/button";

export const Todo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editTitle, setEditTitle] = useState(false);
  const [valueTitle, setValuetitle] = useState(``);
  const [editComment, setEditComment] = useState(false);
  const [valueComment, setValueComment] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    request(`/Todo/${id}`).then(({ error, data }) => {
      setValuetitle(data.title);
      setValueComment(data.comment);
      setStatus(data.status);
    });
  }, [id]);

  const heandleSave = () => {
    request(`/editTodo/${id}`, "POST", {
      title: valueTitle,
      comment: valueComment,
      status,
    }).then(() => navigate("/"));
  };

  return (
    <div className={styles.wrapper}>
      <span>Название:</span>
      <div className={styles.wrapperTextBlock}>
        {editTitle ? (
          <textarea
            value={valueTitle}
            onChange={({ target }) => setValuetitle(target.value)}
            className={styles.textArea}
          />
        ) : (
          <div>{valueTitle}</div>
        )}
        <div onClick={() => setEditTitle(!editTitle)} className={styles.icon}>
          {editTitle ? <div>✅</div> : <div>✏️</div>}
        </div>
      </div>
      <span>Комментарий:</span>
      <div className={styles.wrapperTextBlock}>
        {editComment ? (
          <textarea
            value={valueComment}
            onChange={({ target }) => setValueComment(target.value)}
            className={styles.textArea}
          />
        ) : (
          <div>{valueComment}</div>
        )}
        <div
          onClick={() => setEditComment(!editComment)}
          className={styles.icon}
        >
          {editComment ? <div>✅</div> : <div>✏️</div>}
        </div>
      </div>
      <Switch
        status={"atWork"}
        setStatus={setStatus}
        label={"в работе"}
        condition={status === "atWork"}
      />
      <Switch
        status={"postpone"}
        setStatus={setStatus}
        label={"отложить"}
        condition={status === "postpone"}
      />
      <Switch
        status={"done"}
        setStatus={setStatus}
        label={"завершить"}
        condition={status === "done"}
      />
      <Button heandler={heandleSave} name={"сохранить"} />
    </div>
  );
};

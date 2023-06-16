import "./index.css";
import { useState } from "react";

const TodoItem = ({ data, emoji }) => {
  /* const onHandleClick = () => alert(data.completed); */
  const userImgPlaceHolder =
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
  const [isCompleted, setisCompleted] = useState(data.completed);
  const onHandleToggle = () => {
    setisCompleted(!isCompleted);
  };
  const onHandleToggle2 = () => {}; //doppio click per eliminare elemento

  return (
    <div className="TodoItem">
      <input type="checkbox" name="check" id="check" checked={data.completed} />
      <p
        key={data.id}
        className={`TodoItem__p ${isCompleted ? "completed" : ""}`}
        id={data.id}
        onClick={onHandleToggle}
        onDoubleClick={onHandleToggle2}
        style={{ textDecoration: `${isCompleted ? "line-through" : ""}` }}
      >
        {data.title}
        {emoji}
      </p>
      <img src={data?.userImg || userImgPlaceHolder} alt={data.title} />
      <p className="TodoItem__username">{data?.userName || "User"}</p>
    </div>
  );
};

export default TodoItem;

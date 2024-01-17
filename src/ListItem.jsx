import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoFilteredState,todoState } from "/store/atoms/store";

function ListItem({ list }) {
   console.log(list);
  const [todoList, setTodoList] = useRecoilState(todoState);
  const deleteItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  
  console.log(todoList);

  const onChange = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  }
  
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        margin: "10px",
      }}
    >
      <input type="checkbox" checked={list.isComplete} onChange={()=>onChange(list.id)} />
      <p>{list.text}</p>
      <button onClick={()=>deleteItem(list.id)}>delete</button>
    </div>
  );
}

export default ListItem;

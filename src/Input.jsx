import React from "react";
import { useSetRecoilState, useRecoilState,useRecoilValue } from "recoil";
import { todoState,filteringEntiy } from "/store/atoms/store";

function Input() {
  const [value, setValue] = React.useState('')
  const todoList = useRecoilValue(todoState)
  const setEntity = useSetRecoilState(filteringEntiy)

  const setTodoList = useSetRecoilState(todoState)
  const onChange = ({target: {value}}) => {
      setValue(value)
  }

  const onClick = () => {
    let getId = () => {
        return Math.random().toString(36).substr(2, 9);
      };
      setTodoList((oldTodoList) => [
          ...oldTodoList,
          {
              id: getId(),
              text: value,
              isComplete: false,
          },
      ])
  }

  return<div style={{
    display:'flex',
    gap:'10px',
  }}>
    
  <div className="input-div">
    <input  value={value} onChange={onChange} type="text" placeholder="enter todo" />
    <button onClick={onClick}>add</button>
  </div>
  <input type="text"  onChange={(e)=>setEntity(e.target.value)} placeholder="Search a todo"/>
  </div>
}

export default Input;

import React from 'react'
import { useRecoilValue,useRecoilState } from 'recoil'
import { todoState } from '/store/atoms/store'
import ListItem from './ListItem'

function Lists() {
    const todoList = useRecoilValue(todoState)
  return (
    <div> 
        {todoList.map((item) =><ListItem key={item.id} list={item}/>
        )}
    </div>
  )
}

export default Lists 
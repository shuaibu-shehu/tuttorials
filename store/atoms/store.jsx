import {atom, selector} from 'recoil';

export const todoState = atom({
    key: 'todoState',
    default: [],
})
console.log('todoState', todoState);

export const filteringEntiy = atom({
    key: 'todoListState',
    default:'',
})

export const todoFilteredState = selector({
    key: 'todoFilteredState',
    get: ({get}) => { 
        let todoList = get(todoState)
        let entity = get(filteringEntiy)
        return todoList.filter((item)=>item.text.includes(entity))
    },
})
  
import { useState } from 'react'
import './App.css'
import Input from './Input'
import { RecoilRoot } from 'recoil'
import Lists from './Lists'
import FilteredList from './FilteredList'

function App() {

  return (
    <RecoilRoot>
      <Input />
      { <FilteredList/> || <Lists/>}
    </RecoilRoot>
  )
}

export default App

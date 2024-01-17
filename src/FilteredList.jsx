import React from 'react'
import { useRecoilValue,useRecoilState } from 'recoil'
import { todoFilteredState ,filteringEntiy} from '/store/atoms/store'
import ListItem from './ListItem'

function FilteredList() {
    const filteredList = useRecoilValue(todoFilteredState)
    console.log(filteredList);
   
    if(filteredList.length &&filteredList[0]!=''){
        return (
            <div> 
                {filteredList.map((item) =><ListItem key={item.id} list={item}/>
                )}
            </div>
          )
    } else{
        return false
    }
  
}

export default FilteredList
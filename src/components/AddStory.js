import React, { useState } from 'react'
import store from '../store/store';
import { Button, ComponentWrapper, InputBox } from '../common/CommonUI';
import { ADD_STORY_PLACEHOLDER } from '../common/Constants';
import { ADD_STORY } from '../store/reducerTypes';

function AddStory() {

  const [story, setStory] = useState("")

  const handlePreSubmit = (event) =>{
    event.preventDefault();
    if(story.trim() !== "")
    {
      store.dispatch({type:ADD_STORY,payload:story})
      setStory("")
    }
    else
      alert("Enter valid story title")
  }
  return (
    <ComponentWrapper>
        <form onSubmit={handlePreSubmit}>
            <InputBox placeholder={ADD_STORY_PLACEHOLDER} value={story} onChange={(e)=>setStory(e.target.value)}/>
            <Button>Add</Button>
        </form>
    </ComponentWrapper>
  )
}

export default AddStory
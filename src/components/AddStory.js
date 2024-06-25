import React, { useState } from 'react'
import store from '../store/store';
import { Button, ComponentWrapper, InputBox } from '../container/CommonUI';

function AddStory() {

  const [story, setStory] = useState("")

  const handlePreSubmit = (event) =>{
    event.preventDefault();
    if(story.trim() !== "")
    {
      store.dispatch({type:"add-story",payload:story})
      setStory("")
    }
    else
      alert("Enter valid story title")
  }
  return (
    <ComponentWrapper>
        <form onSubmit={handlePreSubmit}>
            <InputBox placeholder='Enter jira story title' value={story} onChange={(e)=>setStory(e.target.value)}/>
            <Button type='submit'>Add</Button>
        </form>
    </ComponentWrapper>
  )
}

export default AddStory
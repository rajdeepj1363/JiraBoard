import React, { useState } from 'react'
import styled from 'styled-components';
import store from '../store/store';

const ComponentWrapper = styled.div`
    width: 33rem;
`;
const InputBox = styled.input`
    width: 77%;
    height: 3rem;
    caret-color: transparent;
    border-radius: 5px;
    padding: 0.3rem 0.7rem;
    border: none;
    outline: 0.15rem solid #4F709C;
    margin-right: 0.4rem;
`;
const Button = styled.button`
    width: 17%;
    height: 3rem;
    border: none;
    border-radius: 5px;
    padding: 0.3rem 0.7rem;
    font-weight: 700;
    cursor: pointer;
`;
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
import React from 'react'
import { DeleteStoryBtn } from '../common/CommonUI'
import store from '../store/store';
import { DELETE_STORY } from '../store/reducerTypes';

function DeleteStory(props) {
  const { id } = props
  const handleDelete = () => {
    let response = window.confirm("Are you sure you want to delete ?");
    if(response)
        store.dispatch({type:DELETE_STORY,payload:{id}})
    else
        console.log("DELETE denied");
  }
  return (
    <>
        <DeleteStoryBtn onClick={handleDelete}>X</DeleteStoryBtn>
    </>
  )
}

export default DeleteStory
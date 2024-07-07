import React from "react";
import { connect } from "react-redux";
import Story from "./Story";
import { BoardSubBox, BoardSubBoxTitle, BoardWrapper } from "../common/CommonUI";
import store from "../store/store";
import { COMPLETED, INPROGRESS, TODO } from "../common/Constants";
import { UPDATE_STORY } from "../store/reducerTypes";

function Board(props) {
  const {
    stories: { todo, inprogress, completed },
  } = props;

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drop(ev, cat) {
    ev.preventDefault();
    console.log("Drop",ev);
    let id = ev.dataTransfer.getData("id");
    console.log("Drop data: ",id);
    store.dispatch({type:UPDATE_STORY,payload: {id,updateTo:cat}});
  }

  function drag(ev, id) {
    console.log("Drag",ev);
    ev.dataTransfer.setData("id",id);
  }

  return (
    <BoardWrapper>
      <BoardSubBox id="todo-stories" onDrop={(event)=> drop(event, TODO)} onDragOver={(e)=>allowDrop(e)}>
        <BoardSubBoxTitle>Open Stories</BoardSubBoxTitle>
        {todo.length > 0
          ? todo.map((story) => (
              story.status === TODO && 
              <div key={story.id} draggable="true" onDragStart={(e)=>drag(e, story.id)}>
                <Story
                  id={story.id}
                  title={story.title}
                  status={story.status}
                />
              </div>
            ))
          : "No stories planned!"}
      </BoardSubBox>
      <BoardSubBox id="inprogress-stories" onDrop={(event)=> drop(event, INPROGRESS)} onDragOver={(e)=>allowDrop(e)}>
        <BoardSubBoxTitle>InProgress Stories</BoardSubBoxTitle>
        {inprogress.length > 0
          ? inprogress.map((story) => (
              story.status === INPROGRESS && 
              <div key={story.id}  draggable="true" onDragStart={(e)=>drag(e, story.id)}>
                <Story id={story.id} title={story.title} status={story.status} />
                </div>
            ))
          : null}
      </BoardSubBox >
      <BoardSubBox id="completed-stories" onDrop={(event)=> drop(event, COMPLETED)} onDragOver={(e)=>allowDrop(e)}>
        <BoardSubBoxTitle>Completed Stories</BoardSubBoxTitle>
        {completed.length > 0
          ? completed.map((story) => (
              story.status === COMPLETED && 
              <div key={story.id} draggable="true" onDragStart={(e)=>drag(e, story.id)}>
                <Story id={story.id} title={story.title} status={story.status} />
                </div>
            ))
          : null}
      </BoardSubBox>
    </BoardWrapper>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    stories: state.stories,
  };
};

export default connect(mapStateToProps)(Board);

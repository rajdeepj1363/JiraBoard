import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Story from "./Story";

const BoardWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #F8EDFF;
  height: 80vh;
`;

const BoardSubBox = styled.div`
  flex: 1 0 auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  overflow-y: auto;
  ::-webkit-scrollbar{
    display: none;
  }
`;

const BoardSubBoxTitle = styled.h2``;
function Board(props) {
  const {
    stories: { todo, inprogress, completed },
  } = props;

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drop(ev) {
    ev.preventDefault();
    console.log("Drop",ev);
    var data = ev.dataTransfer.getData("text");
    console.log("Drop data: ",data);
    ev.target.appendChild(document.getElementById(data));
  }

  function drag(ev) {
    console.log("Drag",ev);
    console.log(ev.target.parentElement.nextSibling);
    ev.target.parentElement.nextSibling.appendChild(ev.target)
  }
  return (
    <BoardWrapper>
      <BoardSubBox id="todo-stories" onDrop={(event)=> drop(event)} onDragOver={(e)=>allowDrop(e)}>
        <BoardSubBoxTitle>Open Stories</BoardSubBoxTitle>
        {todo.length > 0
          ? todo.map((story) => (
              <div draggable="true" onDragStart={(e)=>drag(e)}>
                <Story
                  key={story.id}
                  id={story.id}
                  title={story.title}
                  status={story.status}
                />
              </div>
            ))
          : "No stories planned!"}
      </BoardSubBox>
      <BoardSubBox id="inprogress-stories" onDrop={(event)=> drop(event)} onDragOver={(e)=>allowDrop(e)}>
        <BoardSubBoxTitle>InProgress Stories</BoardSubBoxTitle>
        {inprogress.length > 0
          ? inprogress.map((story) => (
              <div onDrop={(event)=> drop(event)} onDragOver={(e)=>allowDrop(e)}><Story id={story.id} title={story.title} /></div>
            ))
          : null}
      </BoardSubBox>
      <BoardSubBox id="completed-stories">
        <BoardSubBoxTitle>Completed Stories</BoardSubBoxTitle>
        {completed.length > 0
          ? completed.map((story) => (
              <Story id={story.id} title={story.title} />
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

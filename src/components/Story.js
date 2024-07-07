import React from "react";
import { StoryNumberText, StoryStatusText, StoryTitleText, StoryWrapper, divStyle } from "../common/CommonUI";
import DeleteStory from "./DeleteStory";

function Story(props) {
  const { id, title, status } = props;
  return (
    <StoryWrapper>
      <div style={divStyle}>
        <StoryNumberText>STR-{id}</StoryNumberText>
      </div>
      <DeleteStory id={id}></DeleteStory>
      <div style={divStyle}>
        <StoryStatusText>{status}</StoryStatusText>
      </div>
      <StoryTitleText>{title}</StoryTitleText>
    </StoryWrapper>
  );
}

export default Story;

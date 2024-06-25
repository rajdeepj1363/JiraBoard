import React from "react";
import { StoryNumberText, StoryTitleText, StoryWrapper, divStyle } from "../container/CommonUI";

function Story(props) {
  const { id, title } = props;
  return (
    <StoryWrapper>
      <div style={divStyle}>
        <StoryNumberText>CAAX-{id}</StoryNumberText>
      </div>
      <StoryTitleText>{title}</StoryTitleText>
    </StoryWrapper>
  );
}

export default Story;

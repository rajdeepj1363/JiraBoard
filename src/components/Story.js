import React from "react";
import styled from "styled-components";

const StoryWrapper = styled.div`
  position: relative;
  width: 70%;
  height: 8rem;
  padding: 0.4rem 0.8rem;
  border: 2.5px solid #4F709C;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;
  margin: 0.4rem auto;
`;

const StoryNumberText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  font-weight: 400;
`;
const StoryStatusText = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  font-weight: 400;
`;

const StoryTitleText = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

const divStyle = {
  position: "relative",
};

function Story(props) {
  const { id, title, status } = props;
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

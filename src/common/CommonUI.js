import styled from "styled-components";

//App.js styles

export const AppWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url("https://png.pngtree.com/background/20221215/original/pngtree-water-color-cloudy-blue-sky-texture-background-picture-image_1985792.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 1.125rem 4rem;
    overflow: hidden;
`;

// AddStory.js styles

export const ComponentWrapper = styled.div`
    width: 33rem;
`;
export const InputBox = styled.input`
    width: 77%;
    height: 3rem;
    caret-color: transparent;
    border-radius: 5px;
    padding: 0.3rem 0.7rem;
    border: none;
    outline: 0.15rem solid #4F709C;
    margin-right: 0.4rem;
`;
export const Button = styled.button`
    width: 17%;
    height: 3rem;
    border: none;
    border-radius: 5px;
    padding: 0.3rem 0.7rem;
    font-weight: 700;
    cursor: pointer;
`;

// Board.js styles


export const BoardWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #F8EDFF;
  height: 80vh;
`;

export const BoardSubBox = styled.div`
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

export const BoardSubBoxTitle = styled.h2``;

// Story.js styles

export const StoryWrapper = styled.div`
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

export const StoryNumberText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 400;
`;
export const StoryStatusText = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 400;
`;

export const StoryTitleText = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

export const divStyle = {
  position: "static",
};


// Delete story button

export const DeleteStoryBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    border-radius: 5px;
    margin: 5px;
    padding: 0.3rem 0.7rem;
    font-weight: 600;
    cursor: pointer;
    &:hover{
      background-color: red;
      color: white;
    }
`;
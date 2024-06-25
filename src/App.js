import styled from "styled-components";
import AddStory from "./components/AddStory";
import Board from "./components/Board";

const AppWrapper = styled.div`
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

function App() {
  return (
    <AppWrapper>
        <AddStory/>
        <Board/>
    </AppWrapper>
  );
}


export default App;

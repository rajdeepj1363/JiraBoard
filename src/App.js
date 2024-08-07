import AddStory from "./components/AddStory";
import Board from "./components/Board";
import { AppWrapper } from "./common/CommonUI";

function App() {
  return (
    <AppWrapper>
        <AddStory/>
        <Board/>
    </AppWrapper>
  );
}


export default App;

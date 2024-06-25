import AddStory from "./components/AddStory";
import Board from "./components/Board";
import { AppWrapper } from "./container/CommonUI";

function App() {
  return (
    <AppWrapper>
        <AddStory/>
        <Board/>
    </AppWrapper>
  );
}


export default App;

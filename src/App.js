import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Containt from "./Component/Containt";
import { DragDropContext } from "react-beautiful-dnd";
function App() {
  return (
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Header />
          <Containt />
        </div>
      </div>
  );
}

export default App;

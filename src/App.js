import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Containt from "./Component/Containt";
function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Header />
        <Containt />
      </div>
    </div>
  );
}

export default App;

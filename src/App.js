import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Containt from "./Component/Containt";
function App() {
  return (
    <div className="inline-flex">
      <Sidebar />
      <div>
        <div className="w-1/2">
          <Header />
        </div>
        <div className="w-full">
          <Containt />
        </div>
      </div>
    </div>
  );
}

export default App;

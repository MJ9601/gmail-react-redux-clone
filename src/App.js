import Feed from "./components/js/Feed";
import Navbar from "./components/js/Navbar";
import Sidebar from "./components/js/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__wrapper">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;

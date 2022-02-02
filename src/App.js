import './App.css';
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";

const App = () => {
  return (
    <div className="app">
      <Sidebar/>
      <Feed/>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList.jsx";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="myContainer h-screen">
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import stonkData from "./data";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Symbol from "./pages/Symbol";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/Dashboard/:symbol"
          element={<Symbol data={stonkData} />}
        />
        <Route path="/Dashboard" element={<Dashboard data={stonkData} />} />
      </Routes>
    </div>
  );
}

export default App;
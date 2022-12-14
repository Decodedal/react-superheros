import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import HeroPage from "./components/hero-page";
import About from "./components/about";

const api = process.env.REACT_APP_API_KEY
console.log(api)

function App() {
  return (
    <div className="display">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<HeroPage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

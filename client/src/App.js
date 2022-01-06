import "./App.css";
import Landing from "./components/pages/Landing";
import Info from "./components/pages/Info";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
};

export default App;

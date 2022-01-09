import "./App.css";
import Landing from "./components/pages/Landing";
import Info from "./components/pages/Info";
import Tbd1 from "./components/pages/Tbd1";
import Tbd2 from "./components/pages/Tbd2";
import Tbd3 from "./components/pages/Tbd3";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Tbd1" element={<Tbd1 />} />
        <Route path="/Tbd2" element={<Tbd2 />} />
        <Route path="/Tbd3" element={<Tbd3 />} />
      </Routes>
    </Router>
  );
};

export default App;

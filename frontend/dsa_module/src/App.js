import './components/Navbar.css';
import Navbar from './components/Navbar';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage/FrontPage';
import Programming from './components/Programming/Programming';
import DsaSyllabus from './components/DsaSyllabus/DsaSyllabus';
import CheatSheet from './components/CheatSheet/Sheet';
import Queries from './components/Queries/Queries';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/dsasyllabus" element={<DsaSyllabus />} />
          <Route path="/cheatsheet" element={<CheatSheet />} />
          <Route path="/queries" element={<Queries />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

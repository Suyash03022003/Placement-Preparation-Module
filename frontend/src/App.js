import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import './components/Navbar.css';
import './components/footer.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import FrontPage from './components/FrontPage/FrontPage';
import Programming from './components/Programming/Programming';
import DsaSyllabus from './components/DsaSyllabus/DsaSyllabus';
import CheatSheet from './components/CheatSheet/Sheet';
import Queries from './components/Queries/Queries';
import ShowDetailsQues from './components/Programming/ShowDetailsQues';
import Sidebar from './components/Sidebar.js';
import Login from './components/Login/Login.js';
import Array from './components/Array.js';
import String from './components/String.js';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/dsasyllabus" element={<DsaSyllabus />} />
          <Route path="/array" element={<Array />} />
          <Route path="/string" element={<String />} />
          <Route path="/cheatsheet" element={<CheatSheet />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/login" element={<Login />} />
          <Route path='/details/:id' element={<ShowDetailsQues />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

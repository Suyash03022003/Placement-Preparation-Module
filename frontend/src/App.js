import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Navbar from './components/NavBar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import FrontPage from './components/FrontPage/FrontPage';
import Programming from './components/Programming/Programming';
import DsaSyllabus from './components/DsaSyllabus/DsaSyllabus';
import CheatSheet from './components/CheatSheet/Sheet';
import Queries from './components/Queries/Queries';
import ShowDetailsQues from './components/Programming/ShowDetailsQues';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Array from './components/Array.js';
import String from './components/String.js';
import Admin from './components/admindashboard/admin.js';
import Profile from './components/UserProfile/Profile.js';
import ScrollToTop from "./includes/ScrollToTop/ScrollToTop.js";
import LearnDSA from './components/LearnDSA/LearnDSA';
import InterviewQues from './components/InterviewQues/InterviewQues';
import Quizzes from './components/Quizzes/Quizzes';
import QuizQuestion from './components/Quizzes/QuizQuestion';

function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/learnDSA" element={<LearnDSA />} />
          <Route path="/quizzes" element={<Quizzes />} />
          {/* <Route path="/quizzes" element={<Quizzes />} /> */}
          <Route path="/quizquestion" element={<QuizQuestion />} />
          <Route path="/interviewques" element={<InterviewQues />} />
          <Route path="/register" element={<Register />} />
          <Route path='/details/:id' element={<ShowDetailsQues />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

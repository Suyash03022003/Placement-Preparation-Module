import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import ScrollToTop from "./includes/ScrollToTop/ScrollToTop.js"
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Admin from './components/admindashboard/admin.js'
import User from './components/User/User.js';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/user/*" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

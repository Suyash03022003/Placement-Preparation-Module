import React, { useEffect, useState } from 'react';
import "./Programming.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen';
import { useCookies } from 'react-cookie';

function Programming() {
  const [cookies, setCookie] = useCookies(['user']);
  const [fname, setFname] = useState("");

  useEffect(() => {
    if (cookies.user && cookies.user.name) {
        const gettingFirstName = cookies.user.name.split(" ")[0];
        setFname(gettingFirstName);
    }
}, [cookies.user]);

  const [ques, setQues] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/ques')
      .then((response) => {
        setQues(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, []);
  return (
    <div>
      {/* <div className='filter'>
        <div className="dropdown">
          <button className="dropbtn">Topic</button>
          <div className="dropdown-content">
            <a href="#">Array</a>
            <a href="#">String</a>
            <a href="#">Linked List</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Difficulty</button>
          <div className="dropdown-content">
            <a href="#">Easy</a>
            <a href="#">Medium</a>
            <a href="#">Hard</a>
          </div>
        </div>
        <div className="search-button">Search</div>
        <input type="text" placeholder="Search Anything" className="search-input" />
      </div> */}

      <div className='programming-questions'>
        {loading ? (
          <LoadingScreen />
        ) : (
          <table class="tablecontent">
            <thead>
              <tr>
                <th>SR NO.</th>
                <th>TITLE</th>
                <th>DIFFICULTY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody id="tbody">
              {ques.map((que, index) => (
                <tr key={index}>
                  <td dangerouslySetInnerHTML={{__html: index + 1}} ></td>
                  <td dangerouslySetInnerHTML={{__html:que.title}}></td>
                  <td dangerouslySetInnerHTML={{__html: que.difficultyLevel}} ></td>
                  <td><Link to={fname !== "" ? `/user/details/${que._id}`: "/login"}><button className='solve-button'>Solve</button></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Programming;

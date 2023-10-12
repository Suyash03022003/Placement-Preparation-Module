import React from 'react'
import "./Programming.css";

function Programming() {
    return (
        <div>
            <div className='filter'>
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
            </div>

            <div className='programming-questions'>
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
            <td>1</td>
            <td>Reverse Integer</td>
            <td>Easy</td>
            <td><button className='solve-button'>Solve</button></td>
          </tbody>
          <tbody id="tbody">
            <td>2</td>
            <td>Merge two sorted list</td>
            <td>Easy</td>
            <td><button className='solve-button'>Solve</button></td>
          </tbody>
          <tbody id="tbody">
            <td>3</td>
            <td>Sudoku Solver</td>
            <td>Hard</td>
            <td><button className='solve-button'>Solve</button></td>
          </tbody>
          <tbody id="tbody">
            <td>4</td>
            <td>Valid Parentheses</td>
            <td>Medium</td>
            <td><button className='solve-button'>Solve</button></td>
          </tbody>
        </table>
            </div>
        </div>
    );
}

export default Programming;

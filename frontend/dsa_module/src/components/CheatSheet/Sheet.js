import React from 'react';
import "./sheet.css";
export default function CheatSheet() {

    return (
        <div>
            <h1 className='cheetsheet-heading'>Sorting</h1>
            <div className='programming-questions'>
            <table class="tablecontent">
          <thead>
            <tr>
              <th>ALGORITHMN</th>
              <th colspan="3">TIME COMPLEXITY</th>
              <th>SPACE COMPLEXITY</th>
            </tr>
            <tr>
              <th></th>
              <th>BEST</th>
              <th>AVERAGE</th>
              <th>WORST</th>
              <th>WORST</th>
            </tr>
          </thead>
          <tbody id="tbody">
            <td>Quicksort</td>
            <td>&Omega;(n log(n))</td>
            <td>&Theta;(n log(n))</td>
            <td>&Omicron;(n log(n))</td>
            <td>&Omicron;(n log(n))</td>
          </tbody>
          <tbody id="tbody">
            <td>Mergesort</td>
            <td>&Omega;(n log(n))</td>
            <td>&Theta;(n log(n))</td>
            <td>&Omicron;(n log(n))</td>
            <td>&Omicron;(n log(n))</td>
          </tbody>
          <tbody id="tbody">
            <td>Heapsort</td>
            <td>&Omega;(n log(n))</td>
            <td>&Theta;(n log(n))</td>
            <td>&Omicron;(n log(n))</td>
            <td>&Omicron;(n log(n))</td>
          </tbody>
          <tbody id="tbody">
            <td>Bubblesort(n)</td>
            <td>&Omega;(n)</td>
            <td>&Theta;(n*2)</td>
            <td>&Omicron;(n log(n))</td>
            <td>&Omicron;(n log(n))</td>
          </tbody>
        </table>
            </div>
        </div>
    );
}

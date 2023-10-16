import React from 'react';
import "./sheet.css";
export default function CheatSheet() {

  return (
    <div className='cheetsheet'>
      <h1 className='cheetsheet-heading'>Sorting</h1>
      <br></br>
      <div className='cheetsheet-table'>
        <table class="cheetsheet-tablecontent">
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
          <tbody id="cheetsheet-tbody">
            <td>Quicksort</td>
            <td>&Omega;(n log(n))</td>
            <td>&Theta;(n log(n))</td>
            <td>&Omicron;(n log(n))</td>
            <td>&Omicron;(n log(n))</td>
          </tbody>
          <tbody id="cheetsheet-tbody">
            <td>Mergesort</td>
            <td>&Omega;(n log(n))</td>
            <td>&Theta;(n log(n))</td>
            <td>&Omicron;(n log(n))</td>
            <td>&Omicron;(n log(n))</td>
          </tbody>
          <tbody id="cheetsheet-tbody">
            <td>Heapsort</td>
            <td>&Omega;(n log(n))</td>
            <td>&Theta;(n log(n))</td>
            <td>&Omicron;(n log(n))</td>
            <td>&Omicron;(n log(n))</td>
          </tbody>
          <tbody id="cheetsheet-tbody">
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

import React, { useRef } from 'react';
import { Table, Thead, Tbody, Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "./sheet.css";
import CheatSheetSidebar from './CheatSheetSidebar';
export default function CheatSheet() {

  const dataStructuresRef = useRef(null);
  const sortingAlgorithmsRef = useRef(null);
  const DS_ArrayRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDataStructures = () => {
    scrollToRef(dataStructuresRef);
  };

  const scrollToSortingAlgorithms = () => {
    scrollToRef(sortingAlgorithmsRef);
  };

  const scrollToDS_Array = () => {
    scrollToRef(DS_ArrayRef);
  };


  return (
    <div className='sheet'>
      <div className='sheet-sidebar-container'>
        <CheatSheetSidebar
          scrollToDataStructures={scrollToDataStructures}
          scrollToSortingAlgorithms={scrollToSortingAlgorithms}
          scrollToDS_Array={scrollToDS_Array}
        />
      </div>
      <div className='MainContentsheet'>
        <div ref={dataStructuresRef} className='BigO'>
          <h1>Big-O Complexity</h1>
          <h2>Data Structures</h2>
          <Table className='BigO_Table'>
            <Thead >
              <Tr>
                <Td>Data Structures</Td>
                <Td colspan="8">Time Complexity</Td>
                <Td>Space Complexity</Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td> </Td>
                <Td colspan="4">Average</Td>
                <Td colspan="4">Worst</Td>
                <Td>Worst</Td>
              </Tr>

              <Tr>
                <Td> </Td>
                <Td>Indexing</Td>
                <Td>Search</Td>
                <Td>Insertion</Td>
                <Td>Deletion</Td>
                <Td>Indexing</Td>
                <Td>Search</Td>
                <Td>Insertion</Td>
                <Td>Deletion</Td>
                <Td></Td>
              </Tr>

              <Tr>
                <Td>Basic Array</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(n)</Td>
              </Tr>

              <Tr>
                <Td>Dynamic Array</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(n)</Td>
              </Tr>

              <Tr>
                <Td>Singly-Linked List</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(n)</Td>
              </Tr>

              <Tr>
                <Td>Doubly-Linked List</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(n)</Td>
              </Tr>

              <Tr>
                <Td>Skip List</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(n)</Td>
              </Tr>

              <Tr>
                <Td>Hash Table</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(n)</Td>
              </Tr>

              <Tr>
                <Td>Binary Search Tree</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(n)</Td>
              </Tr>
              <Tr>
                <Td>B Tree</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(n)</Td>
              </Tr>
              <Tr>
                <Td>Red Black Tree</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(n)</Td>
              </Tr>
              <Tr>
                <Td>AVL Tree</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>O(n)</Td>
              </Tr>

            </Tbody>
          </Table>
        </div>

        <div ref={sortingAlgorithmsRef} className='Array'>
          <h2>Array Sorting Algorithms</h2>
          <Table className='Array_Table'>
            <Thead >
              <Tr>
                <Td>Algorithm</Td>
                <Td colspan="3">Time Complexity</Td>
                <Td>Space Complexity</Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td> </Td>
                <Td>Best</Td>
                <Td>Average</Td>
                <Td>Worst</Td>
                <Td>Worst</Td>
              </Tr>

              <Tr>
                <Td>Quick Sort</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
              </Tr>

              <Tr>
                <Td>Quick Sort</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
              </Tr>

              <Tr>
                <Td>Quick Sort</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
              </Tr>

              <Tr>
                <Td>Quick Sort</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
              </Tr>

              <Tr>
                <Td>Quick Sort</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
                <Td>&Omega;</Td>
              </Tr>

            </Tbody>
          </Table>
        </div>

        <div>
          <h1>Data Structures</h1>

          <div ref={DS_ArrayRef} className='Data_Structures'>
            <h2 className='DataStructuresMainHeading'>Array</h2>
            <h3 className='DataStructuresSubHeading'>Definition</h3>
            <ul>
              <li>Stores data elements based on a sequential, most commonly 0-based index.</li>
              <li>Based on tuples from set theory.</li>
              <li>One of the oldest and most commonly used data structures.</li>
            </ul>
            <h3 className='DataStructuresSubHeading'>What you need to know</h3>
            <ul>
              <li>Optimal for indexing; bad at searching, inserting, and deleting (except at the end).</li>
              <li>Linear arrays or one-dimensional arrays are the most basic.
                <ul>
                  <li>Static in size, declared with a fixed size.</li>
                </ul>
              </li>
              <li>Dynamic arrays are similar to one-dimensional arrays but have reserved space for additional elements.
                <ul>
                  <li>If a dynamic array is full, it copies its contents to a larger array.</li>
                </ul>
              </li>
              <li>Multi-dimensional arrays are nested arrays that allow multiple dimensions, such as an array of arrays providing a 2-dimensional spatial representation via x, y coordinates.</li>
            </ul>
            <h3 className='DataStructuresSubHeading'>Time Complexity</h3>
            <ul>
              <li>Indexing: Linear array: O(1), Dynamic array: O(1)</li>
              <li>Search: Linear array: O(n), Dynamic array: O(n)</li>
              <li>Optimized Search: Linear array: O(log n), Dynamic array: O(log n)</li>
              <li>Insertion: Linear array: n/a, Dynamic array: O(n)</li>
            </ul>
          </div>
        </div>

        <div className='Data_Structures'>
          <h2 className='DataStructuresMainHeading'>Linked List</h2>
          <h3 className='DataStructuresSubHeading'>Definition</h3>
          <ul>
            <li>Stores data with nodes that point to other nodes.
              <ul>
                <li>Nodes, at its most basic it has one datum and one reference (another node).</li>
                <li>A linked list chains nodes together by pointing one node's reference towards another node.</li>
              </ul>
            </li>
          </ul>

          <h3 className='DataStructuresSubHeading'>What you need to know</h3>
          <ul>
            <li>Designed to optimize insertion and deletion, slow at indexing and searching.</li>
            <li>Doubly linked list has nodes that also reference the previous node.</li>
            <li>Circularly linked list is simple linked list whose tail, the last node, references the head, the first node.</li>
            <li>Stack, commonly implemented with linked lists but can be made from arrays too.
              <ul>
                <li>Stacks are last in, first out (LIFO) data structures.</li>
                <li>Made with a linked list by having the head be the only place for insertion and removal.</li>
              </ul>
            </li>
            <li>Queues, too can be implemented with a linked list or an array.
              <ul>
                <li>Queues are a first in, first out (FIFO) data structure.</li>
                <li>Made with a doubly linked list that only removes from head and adds to tail.</li>
              </ul>
            </li>
          </ul>

          <h3 className='DataStructuresSubHeading'>Time Complexity</h3>
          <ul>
            <li>Indexing: Linked Lists: O(n)</li>
            <li>Search: Linked Lists: O(n)</li>
            <li>Optimized Search: Linked Lists: O(n)</li>
            <li>Insertion: Linked Lists: O(1)</li>
          </ul>
        </div>
        {/* ------------------------------- */}
        <div className='Data_Structures'>
          <h2 className='DataStructuresMainHeading'>Hash Table</h2>
          <h3 className='DataStructuresSubHeading'>Definition</h3>
          <ul>
            <li>Stores data with key value pairs.</li>

            <li>Hash functions accept a key and return an output unique only to that specific key.
              <ul>
                <li>This is known as hashing, which is the concept that an input and an output have a one-to-one correspondence to map information.</li>
                <li>Hash functions return a unique address in memory for that data.</li>
              </ul>
            </li>
          </ul>

          <h3 className='DataStructuresSubHeading'>What you need to know</h3>
          <ul>
            <li>Designed to optimize searching, insertion, and deletion.</li>
            <li>Hash collisions are when a hash function returns the same output for two distinct inputs.
              <ul>
                <li>All hash functions have this problem.</li>
                <li>This is often accommodated for by having the hash tables be very large.</li>
              </ul>
            </li>
            <li>Hashes are important for associative arrays and database indexing.</li>
          </ul>

          <h3 className='DataStructuresSubHeading'>Time Complexity</h3>
          <ul>
            <li>Indexing: Hash Tables: O(1)</li>
            <li>Search: Hash Tables: O(1)</li>
            <li>Insertion: Hash Tables: O(1)</li>

          </ul>
        </div >
        {/* --------------------------------- */}

        < div className='Data_Structures' >

        </div >

        <div className='Data_Structures'>

        </div>

      </div >
    </div >
  );
}

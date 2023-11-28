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
                <Td>O(n)</Td>
                <Td>O(n)</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
              </Tr>

              <Tr>
                <Td>Singly-Linked List</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
                <Td>O(1)</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
                <Td>O(1)</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
              </Tr>
              <Tr>
                <Td>Doubly-Linked List</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
                <Td>O(1)</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
                <Td>O(1)</Td>
                <Td>O(1)</Td>
                <Td>O(n)</Td>
              </Tr>
              <Tr>
                <Td>Hash Table</Td>
                <Td>-</Td>
                <Td>O(1)</Td>
                <Td>O(1)</Td>
                <Td>O(1)</Td>
                <Td>-</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
              </Tr>

              <Tr>
                <Td>Binary Search Tree</Td>
                <Td>O(log(n))</Td>
                <Td>O(log(n))</Td>
                <Td>O(log(n))</Td>
                <Td>O(log(n))</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
                <Td>O(n)</Td>
              </Tr>

              <Tr>
                <Td>AVL Tree</Td>
                <Td>O(log(n))</Td>
                <Td>O(log(n))</Td>
                <Td>O(log(n))</Td>
                <Td>O(log(n))</Td>
                <Td>O(log(n))</Td>
                <Td>O(log(n))</Td>
                <Td>O(log(n))</Td>
                <Td>O(log(n))</Td>
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
                <Td>&Omega;(n log(n))</Td>
                <Td>&Theta;(n log(n))</Td>
                <Td>O(n^2)</Td>
                <Td>O(log(n))</Td>
              </Tr>

              <Tr>
                <Td>Merge Sort</Td>
                <Td>&Omega;(n log(n))</Td>
                <Td>&Theta;(n log(n))</Td>
                <Td>O(n log(n))</Td>
                <Td>O(n)</Td>
              </Tr>

              <Tr>
                <Td>Heap Sort</Td>
                <Td>&Omega;(n log(n))</Td>
                <Td>&Theta;(n log(n))</Td>
                <Td>O(n log(n))</Td>
                <Td>O(1)</Td>
              </Tr>

              <Tr>
                <Td>Bubble Sort</Td>
                <Td>&Omega;(n)</Td>
                <Td>&Theta;(n^2)</Td>
                <Td>O(n^2)</Td>
                <Td>O(1)</Td>
              </Tr>

              <Tr>
                <Td>Insertion Sort</Td>
                <Td>&Omega;(n)</Td>
                <Td>&Theta;(n^2)</Td>
                <Td>O(n^2)</Td>
                <Td>O(1)</Td>
              </Tr>

              <Tr>
                <Td>Selection Sort</Td>
                <Td>&Omega;(n^2)</Td>
                <Td>&Theta;(n^2)</Td>
                <Td>O(n^2)</Td>
                <Td>O(1)</Td>
              </Tr>
              <Tr>
                <Td>Radix Sort</Td>
                <Td>&Omega;(nk)</Td>
                <Td>&Theta;(nk)</Td>
                <Td>O(nk)</Td>
                <Td>O(n+k)</Td>
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

        <div className='Data_Structures'>
          <h2 className='DataStructuresMainHeading'>Binary Tree</h2>
          <h3 className='DataStructuresSubHeading'>Definition</h3>
          <ul>
            <li>Is a tree like data structure where every node has at most two children.
              <ul>
                <li>There is one left and right child node.</li>
              </ul>
            </li>
          </ul>

          <h3 className='DataStructuresSubHeading'>What you need to know</h3>
          <ul>
            <li>Designed to optimize searching and sorting.</li>
            <li>A degenerate tree is an unbalanced tree, which if entirely one-sided, is essentially a linked list.</li>
            <li>They are comparably simple to implement than other data structures.</li>
            <li>Used to make binary search trees.
              <ul>
                <li>A binary tree that uses comparable keys to assign which direction a child is.</li>
                <li>Left child has a key smaller than its parent node.</li>
                <li>Right child has a key greater than its parent node.</li>
                <li>There can be no duplicate node.</li>
                <li>Because of the above it is more likely to be used as a data structure than a binary tree.</li>
              </ul>
            </li>
          </ul>

          <h3 className='DataStructuresSubHeading'>Time Complexity</h3>
          <ul>
            <li>Indexing: Binary Search Tree: O(log n)</li>
            <li>Search: Binary Search Tree: O(log n)</li>
            <li>Insertion: Binary Search Tree: O(log n)</li>

          </ul>
        </div >
        {/* ---------------- */}
        <div>
          <h1>Algorithms</h1>
        </div>


        <div className='Algorithms'>
          <h2 className='AlgorithmsMainHeading'>Recursive Algorithms</h2>
          <h3 className='AlgorithmsSubHeading'>Definition</h3>
          <ul>
            <li>An algorithm that calls itself in its definition.
              <ul>
                <li>Recursive case a conditional statement that is used to trigger the recursion.</li>
                <li>Base case a conditional statement that is used to break the recursion.</li>
              </ul>
            </li>
          </ul>

          <h3 className='AlgorithmsSubHeading'>What you need to know</h3>
          <ul>
            <li>Designed to optimize searching and sorting.
              <ul>
                <li>If you've seen either of these from a recursive algorithm, you messed up.</li>
                <li>It means that your base case was never triggered because it was faulty or the problem was so massive you ran out of alloted memory.</li>
                <li>Knowing whether or not you will reach a base case is integral to correctly using recursion.</li>
                <li>Often used in Depth First Search</li>
              </ul>
            </li>
          </ul>
        </div >
        {/* ----------------- */}
        <div className='Algorithms'>
          <h2 className='AlgorithmsMainHeading'>Iterative Algorithms</h2>
          <h3 className='AlgorithmsSubHeading'>Definition</h3>
          <ul>
            <li>An algorithm that is called repeatedly but for a finite number of times, each time being a single iteration.

              <ul>
                <li>Often used to move incrementally through a data set.</li>
              </ul>
            </li>
          </ul>

          <h3 className='AlgorithmsSubHeading'>What you need to know</h3>
          <ul>
            <li>Generally you will see iteration as loops, for, while, and until statements.</li>
            <li>Think of iteration as moving one at a time through a set.</li>
            <li>Often used to move through an array.</li>
          </ul>
          <h3 className='DataStructuresSubHeading'>Recursion Vs. Iteration</h3>
          <ul>
            <li>The differences between recursion and iteration can be confusing to distinguish since both can be used to implement the other. But know that,</li>
            <ul>
              <li>Recursion is, usually, more expressive and easier to implement.</li>
              <li>Iteration uses less memory.</li>
            </ul>
            <li>Functional languages tend to use recursion. (i.e. Haskell)</li>
            <li>Imperative languages tend to use iteration. (i.e. Ruby)</li>
          </ul>
        </div >
        {/* ------------------- */}
        <div className='Algorithms'>
          <h2 className='AlgorithmsMainHeading'>Greedy Algorithms</h2>
          <h3 className='AlgorithmsSubHeading'>Definition</h3>
          <ul>
            <li>An algorithm that, while executing, selects only the information that meets a certain criteria.</li>
            <li>The general five components, taken from Wikipedia:

              <ul>
                <li>A candidate set, from which a solution is created.</li>
                <li>A selection function, which chooses the best candidate to be added to the solution.</li>
                <li>A feasibility function, that is used to determine if a candidate can be used to contribute to a solution. </li>
                <li>An objective function, which assigns a value to a solution, or a partial solution. </li>
                <li>A solution function, which will indicate when we have discovered a complete solution. </li>
              </ul>
            </li>
          </ul>

          <h3 className='AlgorithmsSubHeading'>What you need to know</h3>
          <ul>
            <li>Used to find the expedient, though non-optimal, solution for a given problem.</li>
            <li>Generally used on sets of data where only a small proportion of the information evaluated meets the desired result.</li>
            <li>Often a greedy algorithm can help reduce the Big O of an algorithm.</li>
          </ul>
          <h3 className='AlgorithmsSubHeading'>Pseudo Code of a Greedy Algorithm to Find Largest Difference of any Two Numbers in an Array.</h3>
          <ul>
            <p>greedy algorithm (array)<br />
              var largest difference = 0<br />
              var new difference = find next difference (array[n], array[n+1])<br />
              largest difference = new difference if new difference is largest difference<br />
              repeat above two steps until all differences have been found<br />
              return largest difference</p>

          </ul>
        </div >
        {/* ------------------------------------- */}
        <div>
          <h1>Sorting Algorithms</h1>
        </div>
        <div className='Sorting'>
          <h2 className='SortingMainHeading'>Selection Sort</h2>
          <h3 className='SortingSubHeading'>Definition</h3>
          <ul>
            <li>A comparison based sorting algorithm.
              <ul>
                <li>Starts with the cursor on the left, iterating left to right</li>
                <li>Compares the left side to the right, looking for the smallest known item</li>
                <li>1. If the left is smaller than the item to the right it continues iterating<br />
                  2. If the left is bigger than the item to the right, the item on the right becomes the known smallest number.<br />
                  3.Once it has checked all items, it moves the known smallest to the cursor and advances the cursor to the right and starts over</li>
                <li>As the algorithm processes the data set, it builds a fully sorted left side of the data until the entire data set is sorted</li>
              </ul>
            </li>
          </ul>

          <h3 className='SortingSubHeading'>What you need to know</h3>
          <ul>
            <li>Inefficient for large data sets.</li>
            <li>Very simple to implement.</li>

          </ul>

          <h3 className='SortingSubHeading'>Time Complexity</h3>
          <ul>
            <li>Best Case Sort: O(n^2)</li>
            <li>Average Case Sort: O(n^2)</li>
            <li>Worst Case Sort: O(n^2)</li>

          </ul>
          <h3 className='SortingSubHeading'>Space Complexity</h3>
          <ul>
            <li>Worst Case: O(1)</li>
          </ul>
        </div >
        {/* ----------------- */}
        <div className='Sorting'>
          <h2 className='SortingMainHeading'>Insertion Sort</h2>
          <h3 className='SortingSubHeading'>Definition</h3>
          <ul>
            <li>A comparison based sorting algorithm.
              <ul>
                <li>Iterates left to right comparing the current cursor to the previous item.</li>
                <li>If the cursor is smaller than the item on the left it swaps positions and the cursor compares itself again to the left hand side until it is put in its sorted position.</li>
                <li>As the algorithm processes the data set, the left side becomes increasingly sorted until it is fully sorted.</li>
              </ul>
            </li>
          </ul>

          <h3 className='SortingSubHeading'>What you need to know</h3>
          <ul>
            <li>Inefficient for large data sets, but can be faster for than other algorithms for small ones.</li>
            <li>Very simple to implement.Although it has an O(n^2) time complexity, in practice it is slightly less since its comparison scheme only requires checking place if it is smaller than its neighbor.</li>

          </ul>

          <h3 className='SortingSubHeading'>Time Complexity</h3>
          <ul>
            <li>Best Case: O(n)</li>
            <li>Average Case: O(n^2)</li>
            <li>Worst Case: O(n^2)</li>

          </ul>
          <h3 className='SortingSubHeading'>Space Complexity</h3>
          <ul>
            <li>Worst Case: O(n)</li>
          </ul>
        </div >
        {/* ------------- */}
        <div className='Sorting'>
          <h2 className='SortingMainHeading'>Merge Sort</h2>
          <h3 className='SortingSubHeading'>Definition</h3>
          <ul>
            <li>A divide and conquer algorithm.
              <ul>
                <li>Recursively divides entire array by half into subsets until the subset is one, the base case.</li>
                <li>Once the base case is reached results are returned and sorted ascending left to right.</li>
                <li>Recursive calls are returned and the sorts double in size until the entire array is sorted.</li>
              </ul>
            </li>
          </ul>

          <h3 className='SortingSubHeading'>What you need to know</h3>
          <ul>
            <li>This is one of the fundamental sorting algorithms.</li>
            <li>Know that it divides all the data into as small possible sets then compares them.</li>

          </ul>

          <h3 className='SortingSubHeading'>Time Complexity</h3>
          <ul>
            <li>Worst Case: O(n log n)</li>
            <li>Average Case: O(n log n)</li>
            <li>Best Case: O(n)</li>

          </ul>
          <h3 className='SortingSubHeading'>Space Complexity</h3>
          <ul>
            <li>Worst Case: O(1)</li>
          </ul>
        </div >
        {/* ------------ */}
        <div className='Sorting'>
          <h2 className='SortingMainHeading'>Quicksort</h2>
          <h3 className='SortingSubHeading'>Definition</h3>
          <ul>
            <li>A divide and conquer algorithm

              <ul>
                <li>Partitions entire data set in half by selecting a random pivot element and putting all smaller elements to the left of the element and larger ones to the right.</li>
                <li>It repeats this process on the left side until it is comparing only two elements at which point the left side is sorted.</li>
                <li>When the left side is finished sorting it performs the same operation on the right side.</li>
              </ul>
              <li>Computer architecture favors the quicksort process.</li>
            </li>
          </ul>

          <h3 className='SortingSubHeading'>What you need to know</h3>
          <ul>
            <li>While it has the same Big O as (or worse in some cases) many other sorting algorithms it is often faster in practice than many other sorting algorithms, such as merge sort.</li>

          </ul>

          <h3 className='SortingSubHeading'>Time Complexity</h3>
          <ul>
            <li>Worst Case: O(n^2)</li>
            <li>Average Case: O(n log n)</li>
            <li>Best Case: O(n log n)</li>

          </ul>
          <h3 className='SortingSubHeading'>Space Complexity</h3>
          <ul>
            <li>Worst Case: O(log n)</li>
          </ul>
          <h3 className='SortingSubHeading'>Merge Sort Vs. Quicksort</h3>
          <ul>
            <li>Quicksort is likely faster in practice, but merge sort is faster on paper.</li>
            <li>Merge Sort divides the set into the smallest possible groups immediately then reconstructs the incrementally as it sorts the groupings.
            </li>
            <li>Quicksort continually partitions the data set by a pivot, until the set is recursively sorted.
            </li>
          </ul>
        </div >

        <div>
          <h1>Searching Algorithms</h1>
        </div>
        <div className='Searching'>
          <h2 className='SearchingMainHeading'>Breadth First Search</h2>
          <h3 className='SearchingSubHeading'>Definition</h3>
          <ul>
            <li>An algorithm that searches a tree (or graph) by searching levels of the tree first, starting at the root.

              <ul>
                <li>It finds every node on the same level, most often moving left to right.</li>
                <li>While doing this it tracks the children nodes of the nodes on the current level.</li>
                <li>When finished examining a level it moves to the left most node on the next level.</li>
                <li>The bottom-right most node is evaluated last (the node that is deepest and is farthest right of it's level).</li>
              </ul>
              <li>Computer architecture favors the quicksort process.</li>
            </li>
          </ul>

          <h3 className='SearchingSubHeading'>What you need to know</h3>
          <ul>
            <li>Optimal for searching a tree that is wider than it is deep.</li>
            <li>Uses a queue to store information about the tree while it traverses a tree.
              <ul>
                <li>Because it uses a queue it is more memory intensive than depth first search.</li>
                <li>The queue uses more memory because it needs to stores pointers</li>
              </ul>
            </li>
          </ul>

          <h3 className='SearchingSubHeading'>Time Complexity</h3>
          <ul>
            <li>Search: Breadth First Search: O(V + E)</li>
            <li>E is number of edges</li>
            <li>V is number of vertices</li>

          </ul>
        </div >
        {/* ------------------- */}
        <div className='Searching'>
          <h2 className='SearchingMainHeading'>Depth First Search</h2>
          <h3 className='SearchingSubHeading'>Definition</h3>
          <ul>
            <li> An algorithm that searches a tree (or graph) by searching depth of the tree first, starting at the root.
              <ul>
                <li>It traverses left down a tree until it cannot go further.</li>
                <li>Once it reaches the end of a branch it traverses back up trying the right child of nodes on that branch, and if possible left from the right children.</li>
                <li>When finished examining a branch it moves to the node right of the root then tries to go left on all it's children until it reaches the bottom.</li>
                <li>The right most node is evaluated last (the node that is right of all it's ancestors).</li>
              </ul>
            </li>
          </ul>

          <h3 className='SearchingSubHeading'>What you need to know</h3>
          <ul>
            <li>Optimal for searching a tree that is deeper than it is wide.</li>
            <li>Uses a stack to push nodes onto.
              <ul>
                <li>Because a stack is LIFO it does not need to keep track of the nodes pointers and is therefore less memory intensive than breadth first search.</li>
                <li>Once it cannot go further left it begins evaluating the stack.</li>
              </ul>
            </li>
          </ul>

          <h3 className='SearchingSubHeading'>Time Complexity</h3>
          <ul>
            <li>Search: Depth First Search: O(|E| + |V|)</li>
            <li>E is number of edges</li>
            <li>V is number of vertices</li>

          </ul>
          <h3 className='SearchingSubHeading'>Breadth First Search Vs. Depth First Search</h3>
          <ul>
            <li>The simple answer to this question is that it depends on the size and shape of the tree.<ul>
              <li>For wide, shallow trees use Breadth First Search</li>
              <li>For deep, narrow trees use Depth First Search.</li>
            </ul>
            </li>

          </ul>
        </div >
      </div >
    </div >
  );
}

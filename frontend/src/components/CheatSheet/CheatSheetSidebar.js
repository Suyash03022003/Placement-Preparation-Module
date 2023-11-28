import React, { useState } from 'react';
import styles from './cheatSheetSidebar.module.css';

export default function CheatSheetSidebar({ scrollToDataStructures, scrollToSortingAlgorithms, scrollToDS_Array, scrollToDS_LinkedList,
  scrollToDS_HashTable, scrollToDS_BinaryTree,scrollToAlgorithms_Basics, scrollToAlgorithms_Selection, scrollToAlgorithms_Insertion, scrollToAlgorithms_Merge, scrollToAlgorithms_Quick, scrollToAlgorithms_BFS, scrollToAlgorithms_DFS }) {
  const [isOpenBigO, setIsOpenBigO] = useState(false);
  const [isOpenDataStructures, setIsOpenDataStructures] = useState(false);
  const [isOpenAlgorithms, setIsOpenAlgorithms] = useState(false);

  const toggleCollapse = (section) => {
    switch (section) {
      case 'BigO':
        setIsOpenBigO(!isOpenBigO);
        closeOtherSections('BigO');
        break;
      case 'DataStructures':
        setIsOpenDataStructures(!isOpenDataStructures);
        closeOtherSections('DataStructures');
        break;
      case 'Algorithms':
        setIsOpenAlgorithms(!isOpenAlgorithms);
        closeOtherSections('Algorithms');
        break;
      default:
        break;
    }
  };

  const closeOtherSections = (currentSection) => {
    if (currentSection !== 'BigO') setIsOpenBigO(false);
    if (currentSection !== 'DataStructures') setIsOpenDataStructures(false);
    if (currentSection !== 'Algorithms') setIsOpenAlgorithms(false);
  };

  return (
    <div className={styles.cheatSheetSidebar}>
      <ul>
        <li onClick={() => toggleCollapse('BigO')}>
          Big-O Complexity
          {isOpenBigO && (
            <ul className={styles.subMenuOpen}>
              <li onClick={scrollToDataStructures}>Data Structures</li>
              <li onClick={scrollToSortingAlgorithms}>Array Sorting Algorithms</li>
            </ul>
          )}
        </li>

        <li onClick={() => toggleCollapse('DataStructures')}>
          Data Structures
          {isOpenDataStructures && (
            <ul className={styles.subMenuOpen}>
              <li onClick={scrollToDS_Array}>Array</li>
              <li onClick={scrollToDS_LinkedList}>Linked List</li>
              <li onClick={scrollToDS_HashTable}>Hash Table</li>
              <li onClick={scrollToDS_BinaryTree}>Binary Tree</li>
            </ul>
          )}
        </li>

        <li onClick={() => toggleCollapse('Algorithms')}>
          Algorithms
          {isOpenAlgorithms && (
            <ul className={styles.subMenuOpen}>
              <li onClick={scrollToAlgorithms_Basics}>Algorithm Basics</li>
              <li onClick={scrollToAlgorithms_Selection}>Selection Sort</li>
              <li onClick={scrollToAlgorithms_Insertion}>Insertion Sort</li>
              <li onClick={scrollToAlgorithms_Merge}>Merge Sort</li>
              <li onClick={scrollToAlgorithms_Quick}>Quick Sort</li>
              <li onClick={scrollToAlgorithms_BFS}>Breadth First Search</li>
              <li onClick={scrollToAlgorithms_DFS}>Depth First Search</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

// Sidebar.js

import React, { useState } from 'react';
import styles from './cheatSheetSidebar.module.css';

export default function CheatSheetSidebar({ scrollToDataStructures, scrollToSortingAlgorithms, scrollToDS_Array }) {
  const [isOpenBigO, setIsOpenBigO] = useState(false);
  const [isOpenDataStructures, setIsOpenDataStructures] = useState(false);
  const [isOpenAlgorithms, setIsOpenAlgorithms] = useState(false);
  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const [isOpenSearching, setIsOpenSearching] = useState(false);

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
      case 'Sorting':
        setIsOpenSorting(!isOpenSorting);
        setIsOpenSearching(false);
        break;
      case 'Searching':
        setIsOpenSearching(!isOpenSearching);
        setIsOpenSorting(false);
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
        <li onClick={() => toggleCollapse('BigO')}>Big-O Complexity</li>
        {isOpenBigO && (
          <ul className={styles.subMenuOpen}>
            <li onClick={scrollToDataStructures}>Data Structures</li>
            <li onClick={scrollToSortingAlgorithms}>Array Sorting Algorithms</li>
          </ul>
        )}

        <li onClick={() => toggleCollapse('DataStructures')}>Data Structures</li>
        {isOpenDataStructures && (
          <ul className={styles.subMenuOpen}>
            <li onClick={scrollToDS_Array}>Array</li>
            <li>Linked List</li>
            <li>Hash Table or Hash Map</li>
            <li>Binary Tree</li>
          </ul>
        )}

        <li onClick={() => toggleCollapse('Algorithms')}>Algorithms</li>
        {isOpenAlgorithms && (
          <ul className={styles.subMenuOpen}>
            <li onClick={() => toggleCollapse('Sorting')}>Sorting</li>
            {isOpenSorting && (
              <ul className={styles.subMenuOpen}>
                <li>Selection Sort</li>
                <li>Insertion Sort</li>
                <li>Merge Sort</li>
                <li>Quick Sort</li>
              </ul>
            )}

            <li onClick={() => toggleCollapse('Searching')}>Searching</li>
            {isOpenSearching && (
              <ul className={styles.subMenuOpen}>
                <li>Breadth First Search</li>
                <li>Depth First Search</li>
              </ul>
            )}
          </ul>
        )}
      </ul>
    </div>
  );
}

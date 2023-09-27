import React from 'react';
import "./sheet.css";
export default function CheatSheet() {

    return (
        <div className="Container">
            {/* <h1 className="heading-1">Array Sorting Algorithms</h1> */}
            <div className="body">
                <div className="cards">
                    <div className="card">
                        <div className="img-holder">
                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "25px 5px 0px 0px", }}>Quick Sort</h1>
                        </div>
                        <div className="card-content" >
                            <h3>Time Complexity</h3>
                            <br></br>
                            <p>Best Case: Ω(n log(n))</p>
                            <br></br>
                            <p>Worst Case: O(n^2)</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-holder">
                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "25px 5px 0px 0px", }}>Merge Sort</h1>
                        </div>
                        <div className="card-content" >
                            <h3 >Time Complexity</h3>
                            <br></br>
                            <p>Best Case: Ω(n log(n))</p>
                            <br></br>
                            <p>Worst Case: O(n log(n))</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-holder">
                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "25px 5px 0px 0px", }}>Heap Sort</h1>
                        </div>
                        <div className="card-content" >
                            <h3 >Time Complexity</h3>
                            <br></br>
                            <p>Best Case: Ω(n log(n))</p>
                            <br></br>
                            <p>Worst Case: O(n log(n))</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-holder">
                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "25px 5px 0px 0px", }}>Bubble Sort</h1>
                        </div>
                        <div className="card-content" >
                            <h3 >Time Complexity</h3>
                            <br></br>
                            <p>Best Case: Ω(n)</p>
                            <br></br>
                            <p>Worst Case: O(n^2)</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-holder">
                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "25px 5px 0px 0px", }}>Insertion Sort</h1>
                        </div>
                        <div className="card-content" >
                            <h3 >Time Complexity</h3>
                            <br></br>
                            <p>Best Case: Ω(n)</p>
                            <br></br>
                            <p>Worst Case: O(n^2)</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-holder">
                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "25px 5px 0px 0px", }}>Selection Sort</h1>
                        </div>
                        <div className="card-content" >
                            <h3 >Time Complexity</h3>
                            <br></br>
                            <p>Best Case: Ω(n^2)</p>
                            <br></br>
                            <p>Worst Case: O(n^2)</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-holder">
                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "25px 5px 0px 0px", }}>Radix Sort</h1>
                        </div>
                        <div className="card-content" >
                            <h3 >Time Complexity</h3>
                            <br></br>
                            <p>Best Case: Ω(nk)</p>
                            <br></br>
                            <p>Worst Case: O(nk)</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-holder">
                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "25px 5px 0px 0px", }}>Heap Sort</h1>

                        </div>
                        <div className="card-content" >
                            <h3 >Time Complexity</h3>
                            <br></br>
                            <p>Best Case: Ω(n log(n))</p>
                            <br></br>
                            <p>Worst Case: O(n log(n))</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-holder">
                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "25px 5px 0px 0px", }}>Bucket Sort</h1>

                        </div>
                        <div className="card-content" >
                            <h3 >Time Complexity</h3>
                            <br></br>
                            <p>Best Case: Ω(n +k)</p>
                            <br></br>
                            <p>Worst Case: O(n^2)</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-holder">
                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "25px 5px 0px 0px", }}>Counting Sort</h1>

                        </div>
                        <div className="card-content" >
                            <h3 >Time Complexity</h3>
                            <br></br>
                            <p>Best Case: Ω(n +k)</p>
                            <br></br>
                            <p>Worst Case: O(n +k)</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-holder">
                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "25px 5px 0px 0px", }}>Tree<br></br> Sort</h1>

                        </div>
                        <div className="card-content" >
                            <h3 >Time Complexity</h3>
                            <br></br>
                            <p>Best Case: Ω(n log(n))</p>
                            <br></br>
                            <p>Worst Case: O(n^2)</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-holder">
                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "15px 5px 0px 0px", }}>Shell<br></br> Sort</h1>

                        </div>
                        <div className="card-content" >
                            <h3 >Time Complexity</h3>
                            <br></br>
                            <p>Best Case: Ω(n log(n))</p>
                            <br></br>
                            <p>Worst Case: O(n^2)</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

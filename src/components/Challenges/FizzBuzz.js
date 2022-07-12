import React from 'react';
import './challenges.css';

function FizzBuzz() {
    const getValues = () => {

        let fizzValue = document.getElementById("fizzValue").value;
        let buzzValue = document.getElementById("buzzValue").value;
    
        fizzValue = parseInt(fizzValue);
        buzzValue = parseInt(buzzValue);
    
        if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
            let fbData = fizzBuzzFunc(fizzValue, buzzValue);
            displayData(fbData);
    
        } else {
            alert("You must enter integers");
        }
    }

    const fizzBuzzFunc = (value1, value2) => {
        let returnArray = [];
        for (let i = 1; i <= 100; i++) {
            if (i % value1 === 0 && i % value2 === 0) {
                returnArray.push('FizzBuzz');
            } else if (i % value1 === 0) {
                returnArray.push('Fizz');
            } else if (i % value2 === 0) {
                returnArray.push('Buzz');
            } else {
                returnArray.push(i);
            }
        }
        return returnArray;
    }

    const displayData = (fbData) => {
        let tableBody = document.getElementById("results");
    
        let templateRow = document.getElementById("fbTemplate");
    
        tableBody.innerHTML = "";
    
        for (let i = 0; i < fbData.length; i += 5) {
            const tableRow = document.importNode(templateRow.content, true);

            const rowCols = tableRow.querySelectorAll("td");
    
            rowCols[0].classList.add(fbData[i]);
            rowCols[0].textContent = fbData[i];
           
            rowCols[1].classList.add(fbData[i + 1]);
            rowCols[1].textContent = fbData[i + 1];
           
            rowCols[2].classList.add(fbData[i + 2]);
            rowCols[2].textContent = fbData[i + 2];
           
            rowCols[3].classList.add(fbData[i + 3]);
            rowCols[3].textContent = fbData[i + 3];
           
            rowCols[4].classList.add(fbData[i + 4]);
            rowCols[4].textContent = fbData[i + 4];
    
            tableBody.appendChild(tableRow);
        }
    }
    

    return (
        <div className='challenge-modal-inside'>
            <h1>React FizzBuzz</h1>
            <div>
                <p>Enter a fizz and a buzz value. Press the button and the values will appear.</p>
            </div>
            <div>
                <div>
                    <h5>Enter Values</h5>
                    <form>
                        <div>
                            <input id="fizzValue" type="number"  placeholder="Fizz Value"
                            aria-label="Fizz Value"></input>
                        </div>
                        <div>
                            <input id="buzzValue" type="number"  placeholder="Buzz Value"
                            aria-label="Buzz Value"></input>
                        </div>
                        <div>
                            <button id="btnSubmit" type="button" className="modal-btn" onClick={getValues}>Buzz It</button>
                        </div>
                    </form>
                    <div>
                        <table>
                            <tbody id="results">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FizzBuzz;

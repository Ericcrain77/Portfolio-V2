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
            alert("Please fill in the Value boxes with integers.");
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
        <div className='fb-modal'>
            <h1>React FizzBuzz</h1>
            <p>Input different numbers, from 1-100, in the 'Fizz Value' and 'Buzz Value' boxes, and click the 'Submit' button. If a number is divisible by the Fizz Value, it will be replaced by the word 'Fizz'. If a number is divisible by the Buzz Value, it will be replaced by the word 'Buzz'. If a number is divisible by both the Fizz and Buzz Values, it will be replaced by the word 'FizzBuzz'. </p>
            <form>
                <div>
                    <input id="fizzValue" type="number" placeholder="Fizz Value"
                    aria-label="Fizz Value"></input>
                </div>
                <div>
                    <input id="buzzValue" type="number" placeholder="Buzz Value"
                    aria-label="Buzz Value"></input>
                </div>
                <div>
                    <button id="btnSubmit" type="button" className="modal-btn" onClick={getValues}>Submit</button>
                </div>
            </form>
            <div>
                <table>
                    <tbody id="results">
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default FizzBuzz;

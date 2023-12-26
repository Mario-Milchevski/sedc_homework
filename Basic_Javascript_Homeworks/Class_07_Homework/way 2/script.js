// debugger;

let button = document.getElementById('button');
button.addEventListener('click', generateTable);


function generateTable () {
    
    let rows = document.getElementById('rowInput');
    let columns = document.getElementById('columnInput');
    rows = parseInt(rows);
    columns = parseInt(columns);
    

    // if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
    //             alert('Please enter valid positive numbers for rows and columns.');
    //             return;
    //         }
    
    let tableQ = `<table border = '2'>`;
    //  document.getElementById('tableQ');
    // tableQ.innerHTML = 

    for (let i = 0; i < rows; i++) {
        tableQ.innerHTML += `<tr>`;
        for (let j = 0; j < columns; j++) {
            tableQ.innerHTML += `<td>
                          row-${i + 1},column-${j + 1}
                          </td>`
        }
        tableQ.innerHTML += `</tr>`;
    }
    tableQ.innerHTML += `</table>`;
    document.body.innerHTML = tableQ;

};


// document.getElementById('button').addEventListener('click', function () {
//     // Get the values from input fields
//     let rows = document.getElementById('rowInput').value;
//     let columns = document.getElementById('columnInput').value;

//     // Convert input values to numbers
//     rows = parseInt(rows);
//     columns = parseInt(columns);

//     // Check if the input values are valid numbers
//     if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
//         alert('Please enter valid positive numbers for rows and columns.');
//         return;
//     }

//     const tableQ = document.getElementById('tableQ');
//     tableQ.innerHTML = `<table border = "2" >`;

//     for (let i = 0; i < rows; i++) {
//         tableQ.innerHTML += '<tr>';
//         for (let j = 0; j < columns; j++) {
//             tableQ.innerHTML += `<td>row-${i + 1},column-${j + 1}</td>`;
//         }
//         tableQ.innerHTML += '</tr>';
//     }

//     tableQ.innerHTML += '</table>';
//     // Append the table to the body
// });
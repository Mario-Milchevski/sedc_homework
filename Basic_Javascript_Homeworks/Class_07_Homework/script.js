const button = document.getElementById('button');
button.addEventListener('click', generateTable);

function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    const rowInput = document.getElementById('rowInput');
    const columnInput = document.getElementById('columnInput');


    // creating all cells
    for (let i = 0; i < rowInput.value; i++) {
        // creates a table row
        const row = document.createElement("tr");
        for (let j = 0; j < columnInput.value; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`Row-${i + 1} Column-${j + 1}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "1");
}
// Calling the main function of creating table cells on button click

// Calling a function to change buttons's background-color on each mouse-click
button.addEventListener('click', function () {
    button.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    
})
function randomColor() {
    // Function definition for random color
    const minimumTreshhold = 50;
    return Math.floor(minimumTreshhold + Math.random() * (255 - minimumTreshhold));
}

// Execute a function when the user presses a key on the keyboard
columnInput.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("button").click();
    }
});

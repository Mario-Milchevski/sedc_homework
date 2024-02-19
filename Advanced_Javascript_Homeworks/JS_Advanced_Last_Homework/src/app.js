//Global variables
// DOM handling
const table = document.getElementById('basicOutput')
const url = `https://raw.githubusercontent.com/Mario-Milchevski/sedc_homework/main/Advanced_Javascript_Homeworks/JS_Advanced_Last_Homework/src/cars.json`
const url1 = `https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G2/Homework/cars.json`
// Get DATA (fetch)

async function getData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.log('Error while trying to fetch data');
    }
}

function printData(data) {
    console.table(data);
    table.innerHTML = `
    <tr>
    <th>Type</th>
    <th>Brand</th>
    <th>Model</th>
    <th>Doors</th>
    <th>Gas Type</th>
    <th>Color</th>
    <th>HP</th>
    <th>New?</th>
    </tr>
    `
    data.forEach(vehicle => {
        vehicle.isNew ? vehicle.isNew = `Yes` : vehicle.isNew = `No`
        table.innerHTML += `
        <tr>
        <td>${vehicle.type}</td>
        <td>${vehicle.brand}</td>
        <td>${vehicle.model}</td>
        <td style="text-align:center;">${vehicle.doors}</td>
        <td>${vehicle.gasType}</td>
        <td>${vehicle.color}</td>
        <td>${vehicle.horsepower}</td>
        <td style="text-align:center;">${vehicle.isNew}</td>
        </tr>
        `
    })
}

getData(url)
    .then(data => {
        printData(data);
    })
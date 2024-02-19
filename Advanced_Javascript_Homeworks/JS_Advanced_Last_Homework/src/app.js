//Global variables
// DOM handling
const table = document.getElementById('tablePrint')
const url = `https://raw.githubusercontent.com/Mario-Milchevski/sedc_homework/main/Advanced_Javascript_Homeworks/JS_Advanced_Last_Homework/src/cars.json`
const url1 = `https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G2/Homework/cars.json`
const searchBtn = document.getElementById('searchBtn')
const typeFilter = document.getElementById('typeFilter')
const brandFilter = document.getElementById('brandFilter')

// Get DATA (fetch)

async function getData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        data.forEach(car => car.isNew ? car.isNew = `Yes` : car.isNew = `No`)
        return data;
    }
    catch (error) {
        console.log('Error while trying to fetch data');
    }
}
// vehicle.isNew ? vehicle.isNew = `Yes` : vehicle.isNew = `No`

function printData(data) {
    console.table(data);
    table.innerHTML = "";
    table.innerHTML = `
        <tr>
            <th>Type</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Doors</th>
            <th>Gas Type</th>
            <th>Color</th>
            <th>HP</th>
            <th>New</th>
        </tr>
        `
    data.forEach(vehicle => {

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

function filterData(data) {
    let filteredData = data;
    const selectedType = typeFilter.value.toLowerCase();
    const selectedBrand = brandFilter.value.toLowerCase();

    if (selectedType) {
        filteredData = filteredData.filter(vehicle => vehicle.type.toLowerCase() === selectedType)
    }
    if (selectedBrand) {
        filteredData = filteredData.filter(vehicle => vehicle.brand.toLowerCase() === selectedBrand)
    }
    return filteredData;
}

searchBtn.addEventListener('click', async function () {
    let data = await getData(url);
    let filteredData = filterData(data);
    printData(filteredData);
})

//Global variables
// DOM elements declaration
const table = document.getElementById('tablePrint')
const notification = document.getElementById('notification')
const url = `https://raw.githubusercontent.com/Mario-Milchevski/sedc_homework/main/Advanced_Javascript_Homeworks/JS_Advanced_Last_Homework/src/cars.json`
const url1 = `https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G2/Homework/cars.json`

// Buttons
const searchBtn = document.getElementById('searchBtn')
const resetBtn = document.getElementById('resetBtn')

const typeFilter = document.getElementById('typeFilter')
const brandFilter = document.getElementById('brandFilter')
const modelFilter = document.getElementById('modelFilter')
const doorsFilter = document.getElementById('doorsFilter')
const gasFitler = document.getElementById('gasFilter')
const colorFitler = document.getElementById('colorFilter')

const newFilter = document.getElementById('newFilter')
const oldFilter = document.getElementById('oldFilter')

const hpFilter = document.getElementById('hpFilter')
const hpHtml = document.getElementById('hpHtml')

// GET DATA (fetch)

async function getData(url) {
    try {
        let response = await fetch(url);
        data = await response.json();
        return data;
    }
    catch (error) {
        console.log('Error while trying to fetch data');
    }
}

// DISPLAY / PRINT

function printData(filteredData) {
    console.table(filteredData);
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
        filteredData.forEach(vehicle => {
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
// FILTER

function filterData(data) {
    let filteredData = data;
    const selectedType = typeFilter.value.toLowerCase();
    const selectedBrand = brandFilter.value.toLowerCase();
    const typedModel = modelFilter.value.toLowerCase();
    const selectedDoorsNum = parseInt(doorsFilter.value);
    const selectedGasType = gasFitler.value.toLowerCase();
    const colorWanted = colorFitler.value.toLowerCase();
    const newChecked = newFilter.checked;
    const oldChecked = oldFilter.checked;

    const hpChosen = parseInt(hpFilter.value);

    if (selectedType) {
        filteredData = filteredData.filter(vehicle => vehicle.type.toLowerCase() === selectedType)
    }
    if (selectedBrand) {
        filteredData = filteredData.filter(vehicle => vehicle.brand.toLowerCase() === selectedBrand)
    }
    if (typedModel) {
        filteredData = filteredData.filter(vehicle => vehicle.model.toLowerCase().includes(typedModel))
    }
    if (selectedDoorsNum) {
        filteredData = filteredData.filter(vehicle => vehicle.doors === selectedDoorsNum)
    }
    if (selectedGasType) {
        filteredData = filteredData.filter(vehicle => vehicle.gasType.toLowerCase() === selectedGasType)
    }
    if (colorWanted) {
        filteredData = filteredData.filter(vehicle => vehicle.color.toLowerCase() === colorWanted)
    }
    if (oldChecked && newChecked) { }
    else {
        if (newChecked) {
            filteredData = filteredData.filter(vehicle => vehicle.isNew === newChecked)
        }
        if (oldChecked) {
            filteredData = filteredData.filter(vehicle => vehicle.isNew !== oldChecked)
        }
    }
    if (hpChosen) {
        filteredData = filteredData.filter(vehicle => vehicle.horsepower <= hpChosen)
    }

    return filteredData;
}


// EVENT LISTENER FUNCTIONS

async function carProgram() {
    let data = await getData(url);
    let filteredData = filterData(data);
    if (filteredData.length === 0) {
        table.innerHTML = "";
        notification.innerHTML = `no data found`;
    } else {
        notification.innerHTML = "";
        printData(filteredData);
    }
}

function hpRangeValueDisplay() {
    hpHtml.innerText = hpFilter.value;
    hpHtml.innerText = parseInt(hpFilter.value);
}

async function reset() {
    typeFilter.value = "";
    brandFilter.value = "";
    modelFilter.value = "";
    doorsFilter.value = "";
    gasFitler.value = "";
    colorFitler.value = "";
    newFilter.checked = false;
    oldFilter.checked = false;
    hpFilter.value = hpFilter.max;
    hpHtml.innerText = hpFilter.value;
    carProgram()
}

// Event listeners list

document.addEventListener('DOMContentLoaded', carProgram)
searchBtn.addEventListener('click', carProgram)
resetBtn.addEventListener('click', function () { reset(url) })
hpFilter.addEventListener('input', hpRangeValueDisplay)

// All done i guess
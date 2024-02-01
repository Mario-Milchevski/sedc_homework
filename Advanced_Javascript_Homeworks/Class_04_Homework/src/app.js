// Selecting elements

let table = document.querySelector('table');
let btn = document.querySelector('#btn');
let btnPrevious = document.querySelector('#btnPrevious');
let counter = 1;
let apiLink = `https://swapi.dev/api/planets/?page=1`;
let nextBtn;
let previousBtn;
// Functionality

function fetchPlanets() {

    fetch(`https://swapi.dev/api/planets/?page=${counter}`).then(data => data.json()).then(res => {
        starWarsPlanet(table, res.results)
    })
}

function starWarsPlanet(table, planets) {
    table.style.border = `2px solid black`
    table.innerHTML = `<tr>
                <th>Planet Name</th>
                <th>Population</th>
                <th>Climate</th>
                <th>Gravity</th>
                    </tr>`
    for (let planet of planets) {



        table.innerHTML += `<tr>
                    <td>${planet.name}</td>            
                    <td>${planet.population}</td>            
                    <td>${planet.climate}</td>            
                    <td>${planet.gravity}</td>            
                            </tr>`
    }
}

let btnNextCreate = (previousBtn) => {
    // if ()
    if (apiLink) {
        let nextBtn = document.createElement('button');
        let nextBtnText = document.createTextNode('NEXT 10');
        nextBtn.appendChild(nextBtnText);
        const btnDiv = document.getElementById("btnDiv");
        document.body.insertBefore(nextBtn, btnDiv);
        nextBtn.addEventListener('click', () => {
            counter++;
            fetchPlanets()

            if (counter > 1 && counter < 3) {
                btnPreviousCreate(previousBtn);
            }

        })
    }
}
function btnPreviousCreate(previousBtn) {
    if (counter <= 1 && previousBtn) {
        previousBtn.style.display = 'none';
    }
    if (counter > 1 && !previousBtn) {
        previousBtn = document.createElement('button');
        let previousBtnText = document.createTextNode('PREVIOUS 10');
        previousBtn.appendChild(previousBtnText);
        const btnDiv = document.getElementById("btnDiv");
        document.body.insertBefore(previousBtn, btnDiv);
    }
    previousBtn.addEventListener('click', () => {
        counter--;
        fetchPlanets()
    })

    
}

btn.addEventListener('click', () => {
    fetch(apiLink).then(data => data.json()).then(res => {
        starWarsPlanet(table, res.results);
        btnNextCreate();
        btnPreviousCreate();
    })
})


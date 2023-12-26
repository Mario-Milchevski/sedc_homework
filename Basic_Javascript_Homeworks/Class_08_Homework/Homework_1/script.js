// ----------------- DOG CLASS -------------
class Dog {
    static counter = 1;

    constructor(name, kind) {
        this.id = Dog.counter++;
        this.name = name;
        this.kind = kind;
    }

    // -------------- dog speak method --------------

    speak(scouse) {
        console.log(`What would you like to say ? 
                     Dog: ${scouse}   `);
    }
}
// --------------- DOG CREATE ON CLICK FUNCTION --------------

const arr1 = [];

const write = document.getElementById('write');
const button = document.getElementById('button');
button.addEventListener('click', createDog);

function createDog() {
    const nameInput = document.getElementById('name').value;
    const kindInput = document.getElementById('kind').value;
    const say = document.getElementById('say').value;

    const dog = new Dog(nameInput, kindInput);

    const dogInfo = `   
                        <p>Dog ${dog.id}</p>
                        <p>Name: ${dog.name}</p>
                        <p>Breed: ${dog.kind}</p>
                        <p>Speak: Hey, my name is <b>${dog.name}</b>.</p>
                        I am a lil ${dog.kind}.
                        Are you ready for some scouse bark?
                        <p>${say}</p>
                        `;


    write.innerHTML += dogInfo;
    console.log(arr1);
    arr1.push(dogInfo);
// ----------- setting a localstorage point -----------
    localStorage.setItem('dogs', JSON.stringify(arr1));

}
// ----------- dropping a localstorage point content  -----------

document.addEventListener('DOMContentLoaded', function () {
    const storedDogs = localStorage.getItem('dogs');
    if (storedDogs) {
        arr1.push(JSON.parse(storedDogs));
        write.innerHTML = arr1;
    }
console.log(storedDogs);

});


//--- WRITE INPUT ON THE HTML DOCUMENT ON KEYPRESS 'ENTER' --//

say.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button").click();
    }
})

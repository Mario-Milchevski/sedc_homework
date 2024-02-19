
async function getTodoData() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    let data = await response.json();
    console.log(data);
}

async function getUserData() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    let todoData = await response.json();
    console.log(todoData);

    let userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${todoData.userId}`);
    let userData = await userRes.json();
    console.log(userData);
    return userData;
}

function printUser () {

}
// let apiService = {
//     getTodo: function (data) {
//         let todoOne = data[0].id;
//         return todoOne;
//     },

//     statsHtml: document.getElementById('stats'),

//     displayTodo: function (todo) {
//         apiService.statsHtml.innerHTML = `
//         <div class="container">
//             <div>
//                 <h3>User Title: ${todo.title} </h3>
//                 <h3>User ID: ${todo.userId} </h3>
//                 <h3>ID: ${todo.id} </h3>
//             </div>
//             `
//     },

//     displayUser: function (user) {
//         apiService.statsHtml.innerHTML = `
//         <div class="container">
//             <div>
//                 <h3>ID: ${user.id} </h3>
//                 <h3>Name: ${user.name} </h3>
//                 <h3>Username: ${user.username} </h3>
//             </div>
//             `
//     }
// }

getTodoData()
getUserData()
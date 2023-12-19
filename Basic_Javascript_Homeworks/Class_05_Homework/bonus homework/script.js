// debugger;
let recipe = document.getElementById("card");

function recipeCard(name, quantity, ingredient) {
  let nameOfRecipe = prompt("Enter the name of the recipe");
  let ingredientsQuantity = parseInt(prompt("How many ingredients do we need for the recipe?"));
  recipe.innerHTML += `<h3>Recipe: ${nameOfRecipe}</h3>
                       <h4>Ingredients:`;
  for (i = 0; i < ingredientsQuantity; i++) {
    let ingredientsNames = prompt(`Enter the name of ingredient number ${i + 1}`);
    recipe.innerHTML += `<ul>
                                <li>${ingredientsNames}</li>
                                </ul>`;
  }
}
recipeCard();
//    BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)

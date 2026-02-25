// DOM Traversal
const main = document.getElementById("main");
console.log(main);
main.innerHTML = "new text on Main";
main.style.backgroundColor = "yellow";

function changeColor(element, color){
    element.style.backgroundColor = color;
}

changeColor(main, "pink");

// function simpleChangeColor(element){
//     element.style.backgroundColor = "green"
// }

// simpleChangeColor(main)

const parents = Array.from(document.getElementsByClassName("parent"));

console.log(parents)

parents.forEach(element => changeColor(element, "yellow"))

// query Selector & grandparent div

const grandparent = document.querySelector(".grandparent");
// grab class="grandparent"

console.log(grandparent);

changeColor(grandparent, "cornflowerblue");

// Create new array for parents from the grandparent

const parents2 = Array.from(grandparent.children);
console.log(parents2);

parents2.forEach(element => changeColor(element, "purple"));

// Grab first parent from the parents2 array
const parentOne = parents2[0];
console.log(parentOne);
changeColor(parentOne, "blanchedalmond");

const childrenOfParentOne = Array.from(parentOne.children);
console.log(childrenOfParentOne);

// Introduce querySelectorAll();
const grandchildren = grandparent.querySelectorAll(".child");
console.log(grandchildren);

// Change all children colors
grandchildren.forEach(element => changeColor(element, "peru"));

// Change one child color
const childOne = childrenOfParentOne[0];
changeColor(childOne, "indianred");

// Select a parent from child
const parent1 = childOne.parentElement;
changeColor(parent1, "orange");

const grandpa = parent1.parentElement;
changeColor(grandpa, "darkkhaki");

// Skip parent, go from child to grandparent
const grandma = childOne.closest(".grandparent");
changeColor(grandma, "rebeccapurple");

// Next element sibling
const childTwo = childOne.nextElementSibling
console.log(childTwo)
changeColor(childTwo, "seagreen")


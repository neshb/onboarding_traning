export const  helloWorld = () => {
    console.log("hello from app js")
}

// here, practice about functional concept in javascript 
// 1. Avoid side effect
// 2. Avoid mutations
// 3. Avoid shared state
// 4. Use pure function
// 5. Use function composition
// 6. Use Declarative code instead of imperative code

// 1. Avoid side effect

let count = 0;
const increment = () => {
    count ++;
    return count
}
console.log("increment",increment())

// here count is define at global level and it could be use by another function too and that can 
// cause side effect for increment function if count use by other function
// side effect code hard to read and hard to debug.
// we should avoid side effect

// another example

// let x = 1;
// func1()
// console.log(x)
// func2()
// console.log(x)
// func3()
// console.log(x)
// here in this example we can see we can not be sure when x is changing its value.
// for that we need to check every function and hard to find out bcoz there are too many side effects
// so we should avoid it.

const incrementFunc = num => num + 1;
// this is call pure function. it does not cause side effect
// pure function -> function depend on the input provided and not on external data that changes.
// it does not changes beyond its scope. and it does not cause side effect.

// ---------------------------------------------------------------------------------------------

// Avoid shared state
// state -> A program is considered stateful if it is designed o remember data from events or user
// interactions. The remembered information is called the state of program


// ----------------------------------------------------------------------------------------------
// Avoid mutable data 
// 
const elmArray = [1, 2, 3, 4, 5, 6];
// here we have elmArray is const type 
const sortArray = (arr) => {
    return arr.sort();
};
const newSortedArray = sortArray(elmArray);
console.log('newSortedArray', newSortedArray); // [1, 2, 3, 4, 5, 6]
console.log('elmArray', elmArray); //[1, 2, 3, 4, 5, 6]

// we can see in above example that both array has changes but we did not wanted it
// it happened becoz in javascript any variable pass into function as pass by reference. so both
// has changed.

// another example 

const elmArray1 = [2, 4, 5, 6, 1, 3];
// here we have elmArray is const type 
Object.freeze(elmArray);
// object freeze method make array immutable 
// now we can create copy of elmArray1 and sort copy array
let newCopyArray = [...elmArray]  // it will create deep copy of array
const sortArrayFunc = (arr) => {
    return arr.sort();
};
const cloneObj = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}
const newSortedArray2 = cloneObj(elmArray1).sort();
const newSortedArray1 = sortArrayFunc(newCopyArray);
console.log('newSortedArray', newSortedArray1, newSortedArray2); // [1, 2, 3, 4, 5, 6]
console.log('elmArray', elmArray1); //2, 4, 5, 6, 1, 3]

// now we have achieved immutable data
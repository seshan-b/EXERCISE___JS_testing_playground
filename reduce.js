const people = [
        { id: "1", name: "Leigh", age: 35 },
        { id: "2", name: "Jenny", age: 30 },
        { id: "3", name: "Heather", age: 28 },
    ]
    console.log("People Variable: ", people)

let result


// Count 

result = people.reduce((accumulate, person) => {
    return accumulate + 1

}, 0)
console.log("Reduce Count Function: ", result)



// Sum ages

result = people.reduce((accumulate, person) => {
    return accumulate + person.age
}, 0)
console.log("Reduce Sum of Ages: ", result)



// Array of names (map)
// Using spread syntax
result = people.reduce((accumulate, person) => {

    return [...accumulate, person.name]

}, [])
console.log("Array of Names  using spread syntax: ", result)



// Array of names (map)
// Using push()
result = people.reduce((accumulate, person) => {

    accumulate.push(person.name)
    return accumulate
}, [])
console.log("Array if Names using push function", result)


// Convert to id => person lookup (dictionary)

result = people.reduce((accumulate, person) => {

    return {...accumulate, [person.id]: person }
}, {})
console.log("Convert to Id person lookup: ", result[2])



// Max age (max value)

result = people.reduce((accumulate, person) => {
    if (accumulate === null || person.age > accumulate) {
        return person.age
    }
    return accumulate


}, null)
console.log("Max Age value:", result)



// Min age (min value)

result = people.reduce((accumulate, person) => {
    if (accumulate === null || person.age < accumulate) {
        return person.age
    }
    return accumulate


}, null)
console.log("Min age Value: ", result)


// Find by name

result = people.reduce((accumulate, person) => {

    if (accumulate !== null) {
        return accumulate
    }

    if (person.name === "Leigh") {
        return person
    }
    return null

}, null)
console.log("Find by name: ", result)



// All over 18

result = people.reduce((accumulate, person) => {
    if (!accumulate) {
        return false

    }
    return person.age > 18;

}, true)
console.log("Get all people over 18 years", result)



// Any over 18

result = people.reduce((accumulate, person) => {
    if (!accumulate) {
        return true

    }
    return person.age > 18;

}, false)
console.log("Any people over 18", result)


// Count occurrences

const orders = [
    { id: "1", status: "pending" },
    { id: "2", status: "pending" },
    { id: "3", status: "cancelled" },
    { id: "4", status: "shipped" }
]

result = orders.reduce((accumulate, order) => {
    return {...accumulate, [order.status]: (accumulate[order.status] || 0) + 1 }
}, {})
console.log("Count how many orders status: ", result)



// Flatten array


const folders = [
    "index.js", ["flatten.js", "map.js"],
    ["any.js", ["all.js", "count.js"]],
]


function flatten(accumulate, item) {

    console.log("accumulate:", accumulate, "item:", item)
    if (Array.isArray(item)) {
        return item.reduce(flatten, accumulate)
    }
    return [...accumulate, item]
}

result = folders.reduce(flatten, [])
console.log("Flatten folder", result)


// Create reduce function ourselves

function reduce(array, callback, initialValue) {
    let accumulate = initialValue;

    for (let i = 0; i < array.length; i++) {
        accumulate = callback(accumulate, array[i], i, array)
            console.log("Create a custom reduce function", accumulate)

    }
    console.log('Create a custom reduce function - Outside the loop: ', accumulate)
    return accumulate;
}

result = reduce([1, 2, 3], (accumulate, number) => accumulate + number, 0)

console.log("Reducer result: ", result);
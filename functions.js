// Passing function into another function.

// Create function
function foo() {
    console.log('This is foo')
}

// Invoke
foo()



// Passing arguments
function passingArgs(x, y, z) {


    console.log('Passing arguments', x, y, z)
}

// Invoke and pass values
passingArgs(1, 2, 3)



// Passing Variable in arguments

function passingVariablesInFunction(a, b, c) {

    // a = 1
    // b = 2
    // c = 3

    // Invoking function and passing in dummy variables
    passingArgs(a, b, c)


    console.log('Passing variables', a, b, c)
}


// Initializing an object
function initializeObj () {

 let a = {
     name: 'Allen'
 }

let b = 10
let c = 20

console.log('Passing objects')


return passingVariablesInFunction(a, b, c)

}




// Invoke function
initializeObj()

function aFunction() {
    console.log('Calling A function')
}

// Calling an function from another

function callingAnotherFunctionInFunction(func) {

    func = aFunction()


    console.log('Function: ', func)

    return func
}


// Invoke function
passingVariablesInFunction(a = 800, b = 100, c = 200)



// Arrow function
const anArrowFunction = (a, b, c) => {
    console.log('This is an arrow function' )
    console.log('Log a: ',  a)
    return a
}

function setTimeout(foo, time)  {

    console.log('Return foo');
    foo()
}


setTimeout(foo, 10000)



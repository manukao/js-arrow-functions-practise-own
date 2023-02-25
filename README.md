# Arrow functions:

Syntax: (parameter1, parameter2, ..., parameterN) => { statements }

Example: const sum = (a + b) => {
return a+b;
}

Implicit Return: const sum = (a + b) => a + b;

Lexical Scoping: Arrow functions have lexical scoping, which means they can access variables in their surrounding scope. For example:

const x = 10;
const myFunction = () => {
console.log(x); // 10
}

this keyword: Arrow functions do not have their own this keyword. Instead, they inherit the this keyword from the surrounding context. This can be useful when working with React components, as it allows you to access the this keyword without having to bind it to the component instance. For example:

class MyComponent extends React.Component {
handleClick = () => {
console.log(this); // this refers to the component instance
}
render() {
return <button onClick={this.handleClick}>Click me</button>;
}
}

Arrow functions and arguments: Arrow functions do not have their own arguments object. Instead, you can use the rest parameter syntax (...args) to access the function arguments. For example:

const myFunction = (...args) => {
console.log(args); // array of arguments
}

/*
	Task 3
*/

function partial(greetFunc, greetingMessage) {
  return name => {
    return greetFunc(greetingMessage, name);
  };
}

// Expected result

function greet(greeting, name) {
  return `${greeting} ${name}`;
}

const sayHelloTo = partial(greet, 'Hello');

sayHelloTo('everyone'); // => 'Hello everyone'

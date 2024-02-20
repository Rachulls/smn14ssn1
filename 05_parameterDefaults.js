// PARAMETER DEFAULTS

// BEFORE
function addNums(a, b) {
  b = b === undefined ? 0 : b;
  return a + b;
}
console.log(addNums(10));

// TODAY
function addNumsWithPD(a = 0, b = 10) {
  return a + b;
}

const addNumsWithAF = (a = 0, b = 10) => a + b;
console.log(addNumsWithAF());

// REACT
function sayHello({ message = "" }) {
  return <div>{message}</div>;
}
<sayHello message = "Soy el mensaje" />;

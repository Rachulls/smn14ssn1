// NULLISH COLESCING OPERATOR
let x;
x = x || "some default";
// console.log(x);

function add(a, b) {
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}

// console.log(add(null, 3));

function addWithNullish(a, b) {
  a = a ?? 0;
  b = b ?? 0;
  return a + b;
}

console.log(addWithNullish(10));

// REACT
function DisplayName({ contact }) {
  return <div>{contact.name ?? "untitled"}</div>;
}

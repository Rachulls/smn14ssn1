// ARROW FUNCTIONA

// BEFORE
function addTen(a) {
  return a + 10;
}

function readFive() {
  return 5;
}

function divideNumbers(a, b) {
  return a / b;
}

// TODAY (AZUCAR SINTAXTICO)
const addTenWithAF = (a) => a + 10;
const readFiveWhithAF = () => 5;
const divideNumbersWithAF = (a, b) => a / b;

// REACT
const arrPerson = [
  { id: 1, name: "Raul" },
  { id: 2, name: "Jose" },
];

function TeddyBearList() {
  return (
    <ul>
      {arrPerson.map((person) => (
        <li>{person.name}</li>
      ))}
    </ul>
  );
}

<TeddyBearList arrPerson={arrPerson} />
// JSX

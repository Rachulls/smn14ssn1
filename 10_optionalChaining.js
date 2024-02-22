// OPTIONAL CHAINING
const personDetails = {
  name: "John",
  age: 34,
  banks: {
    name: "interbank",
    amount: {
      money: 1000,
    },
  },
};
console.log(personDetails.banks?.amount.money);

// REACT
function DisplayName({ contact }) {
  return (
    <>
      <div>{contact.name}</div>;
      <div>{contact.name?.details.info ?? "untitled"}</div>;
    </>
  );
}

//
let status = 0;

{
  status === 100 && <ShowNameA />;
}
{
  status === 200 && <ShowNameB />;
}
{
  status === 300 && <ShowNameC />;
}

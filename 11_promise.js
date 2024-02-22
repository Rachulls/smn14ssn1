// PROMISE

// new Promise(resolve, (reject) => {
//   setTimeout(() => {
//     resolve("resuelto");
//   }, 3000);
// });

const readData = () => {
  const data = fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      //   console.log(data);
      return data.json();
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  // console.log(data);
};

readData();

const readDataWithAxios = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (response.status === 200) {
      // pintar la informacion en el HTML
    }
  } catch (error) {
    console.log(error);
  }
};

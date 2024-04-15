// fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

fetchData();

async function fetchData() {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/typhlosion`
    );

    if (!response.ok) {
      throw new Error('Could not Fetch resourse');
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

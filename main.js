// fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

const inputBox = document.getElementById('inputBox');
const btn = document.getElementById('btn');
const img = document.getElementById('img');
const call = document.getElementById('name');
const abilities = document.getElementById('abilities');
const img2 = document.getElementById('img2');

btn.addEventListener('click', fetchData);

fetchData();
async function fetchData() {
  const take = inputBox.value.toLowerCase();

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${take}`);

    if (!response.ok) {
      throw new Error('Could not Fetch resourse');
    }

    const data = await response.json();

    call.innerHTML = data.name;
    abilities.innerHTML = data.abilities[1].ability.name;
    img.src = data.sprites.front_default;
    img2.src = data.sprites.back_default;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

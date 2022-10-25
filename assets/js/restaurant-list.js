import { restaurantList } from "./data";

function populateList() {
  const detinationList = document.getElementById("#destination-list");

  for (const restaurant of restaurantList) {
    const card = document.createElement("li");
    card.innerHTML = `
        <img 
            src="./assets/img/restaurants/${restaurant.imageName}"
            width="300"
            height="300"
            alt="${restaurant.name}" 
        />
        <a href='${restaurant.mapUrl}'>
            ${restaurant.name}
        </a>
    `;

    detinationList.appendChild(card);
  }
}

console.log("I am here");
populateList();

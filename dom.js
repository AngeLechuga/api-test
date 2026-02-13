export function renderPlanets(planets) {
    const container = document.getElementById("planetsContainer");
    container.innerHTML = "";

    planets.forEach(planet => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${planet.name}</h2>
            <p><strong>Clima:</strong> ${planet.climate}</p>
            <p><strong>Terreno:</strong> ${planet.terrain}</p>
            <p><strong>Población:</strong> ${planet.population}</p>
        `;

        container.appendChild(card);
    });
}

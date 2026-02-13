import { getAllPlanets } from "./api.js";
import { renderPlanets } from "./dom.js";

const loadBtn = document.getElementById("loadBtn");

loadBtn.addEventListener("click", async () => {
    loadBtn.disabled = true;
    loadBtn.textContent = "Cargando...";

    const planets = await getAllPlanets();
    renderPlanets(planets);

    loadBtn.textContent = "Cargar Planetas";
    loadBtn.disabled = false;
});

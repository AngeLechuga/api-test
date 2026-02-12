import { fetchPlanetas } from "./api.js"; 
import { pintarPlanetas } from "./dom.js";

const iniciarApp = async () => {
    console.log("Cargando planetas de starwars ...");

    // obtención de datos
    const planetas = await fetchPlanetas() || [];

    // --- AGREGAMOS EL LOG PARA DEPURACIÓN ---
    console.log("Datos recibidos de la API:", planetas);

    if (planetas.length > 0) {
        pintarPlanetas(planetas);
        document.getElementById('info-header').textContent = "Datos cargados correctamente";
    }else{
        document.getElementById('info-header').textContent = "Error al cargar datos";
    };
};

document.addEventListener('DOMContentLoaded', iniciarApp);
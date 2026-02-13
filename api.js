const BASE_URL = "https://swapi.dev/api/planets/";

export async function getAllPlanets() {
    let planets = [];
    let url = BASE_URL;

    try {
        while (url) {
            const response = await fetch(url);
            const data = await response.json();

            planets = [...planets, ...data.results];
            url = data.next; // siguiente página
        }

        return planets;
    } catch (error) {
        console.error("Error al obtener los planetas:", error);
        return [];
    }
}

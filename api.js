

export const fetchPlanetas = async () => {
    try {
        const URL_PLANETAS = 'https://swapi.info/api/planets/';
        const respuesta = await fetch(URL_PLANETAS);

        if (!respuesta.ok) {
            throw new Error(`Èrror HTTP: ${respuesta.status}`);
        }

        const datos = respuesta.json;
        return datos.results;
    } catch (error) {
        console.error("Error al consultar API: ", error);
        return [];
    }
};

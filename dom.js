export const pintarPlanetas = (planetas) => {
    const contenedor = document.getElementById('lista-planetas');
    const fragmento = document.getDocumentFragment();

    planetas.forEach(planeta => {
        const CAR = document.createElement('article');
        card.className = 'planeta - card';

        card.innerHTML = `
        <h3>${planeta.name}</h3>
        <p><strong>Clima:</strong> ${planeta.climate}</p>
        <p><strong>Terreno:</strong> ${planeta.terrain}</p>
        <p><strong>Población:</strong> ${planeta.population}</p>
        `;

        fragmento.appendChild(card);
    });

    contenedor.innerHTML = '';
    contenedor.appendChild(fragmento);
}
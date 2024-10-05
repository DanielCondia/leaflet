// Crea el mapa y lo centra en la cordenada (5.53528, -73.36778) con un zoom de 15
const mapa = L.map("map").setView([5.53528, -73.36778], 15);

// Agrega la capa de OpenStreetMap para mostrar el mapa base
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(mapa);

// Crea un marcador en la coordenada (5.5446, -73.3576)
let marcador = L.marker([5.550139, -73.353454]).addTo(mapa);

// Crea un circulo en la coordenada (5.5446, -73.3576)
circulo = L.circle([5.550722, -73.345199], {
    radius: 100,
    color: "green"
}).addTo(mapa);

// let radios = [50, 100, 150];
// let i = 0;
// let circulo;
// setInterval(() => {
//     circulo = L.circle([5.550722, -73.345199], {
//         radius: radios[i],
//         color: "green"
//     }).addTo(mapa);
//     i = (i + 1) % radios.length;
//     if (i === 0) {
//         mapa.removeLayer(circulo);
//     }
// }, 2000);

// let radios = [50, 100, 150];
// let i = 0;
// let inicio = [5.550722, -73.345199];
// let marcador = L.marker(inicio).addTo(mapa);
// setInterval(() => {
//     let circulo = L.circle(inicio, {
//         radius: radios[i],
//         color: "green"
//     }).addTo(mapa);
//     i = (i + 1) % radios.length;
//     if (i === 0) {
//         mapa.setView(inicio, 15);
//     }
// }, 2000);


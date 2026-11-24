
import { graphql, http, HttpResponse } from "msw";

export const handlers = [
  http.get("*/api/destinos", async () => {
  const respuesta = await fetch(
  `${import.meta.env.BASE_URL}data/destinos.json`
);
  const destinos = await respuesta.json();

  return HttpResponse.json(destinos);
}),
  graphql.query("ObtenerViajes", ({ variables }) => {
    const viajes = {
      1: {
        vuelos: [
          {
            id: "1",
            aerolinea: "LATAM",
            precio: 85000,
            fecha: "2026-12-15",
            disponible: true
          }
        ],
        hoteles: [
          {
            id: "1",
            nombre: "Hotel Santiago",
            precio: 65000,
            disponible: true
          }
        ]
      },
      2: {
        vuelos: [
          {
            id: "2",
            aerolinea: "Sky Airline",
            precio: 180000,
            fecha: "2026-12-20",
            disponible: true
          }
        ],
        hoteles: [
          {
            id: "2",
            nombre: "Hotel Copacabana",
            precio: 95000,
            disponible: true
          }
        ]
      },
      3: {
        vuelos: [
          {
            id: "3",
            aerolinea: "JetSMART",
            precio: 120000,
            fecha: "2026-12-18",
            disponible: false
          }
        ],
        hoteles: [
          {
            id: "3",
            nombre: "Hotel Buenos Aires",
            precio: 75000,
            disponible: true
          }
        ]
      }
    };

    const resultado = viajes[variables.destinoId];

    return HttpResponse.json({
      data: {
        viajes: resultado || {
          vuelos: [],
          hoteles: []
        }
      }
    });
  })
];

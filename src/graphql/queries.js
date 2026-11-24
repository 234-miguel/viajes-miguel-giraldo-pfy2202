
import { gql } from "@apollo/client";

export const OBTENER_VIAJES = gql`
  query ObtenerViajes($destinoId: ID!) {
    viajes(destinoId: $destinoId) {
      vuelos {
        id
        aerolinea
        precio
        fecha
        disponible
      }
      hoteles {
        id
        nombre
        precio
        disponible
      }
    }
  }
`;

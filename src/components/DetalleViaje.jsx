
import { useQuery } from "@apollo/client/react";
import { OBTENER_VIAJES } from "../graphql/queries";


function DetalleViaje({ destino }) {
  const { loading, error, data } = useQuery(OBTENER_VIAJES, {
    variables: {
      destinoId: String(destino.id)
    }
  });

  if (loading) {
    return <p>Cargando vuelos y hoteles...</p>;
  }

  if (error) {
    return <p>Error al consultar viajes: {error.message}</p>;
  }

  return (
    <div className="seleccion">
      <h2>Viajes disponibles en {destino.nombre}</h2>

      <h3>Vuelos</h3>

      {data?.viajes?.vuelos?.map((vuelo) => (
        <div key={vuelo.id}>
          <p>Aerolínea: {vuelo.aerolinea}</p>
          <p>Precio: ${vuelo.precio}</p>
          <p>Fecha: {vuelo.fecha}</p>
          <p>
            Disponibilidad:
            {vuelo.disponible ? " Disponible" : " No disponible"}
          </p>
        </div>
      ))}

      <h3>Hoteles</h3>

      {data?.viajes?.hoteles?.map((hotel) => (
        <div key={hotel.id}>
          <p>Hotel: {hotel.nombre}</p>
          <p>Precio: ${hotel.precio}</p>
          <p>
            Disponibilidad:
            {hotel.disponible ? " Disponible" : " No disponible"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DetalleViaje;

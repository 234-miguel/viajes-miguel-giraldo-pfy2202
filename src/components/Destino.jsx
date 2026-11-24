
function Destino({ nombre, pais, actividades, onSeleccionar }) {
  return (
    <div className="tarjeta-destino">
      <h3>{nombre}</h3>
      <p>País: {pais}</p>
      <p>Actividades: {actividades}</p>

      <button onClick={onSeleccionar}>
        Ver vuelos y hoteles
      </button>
    </div>
  );
}

export default Destino;

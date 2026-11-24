
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";
import Destino from "./components/Destino";
import DetalleViaje from "./components/DetalleViaje";
import "./App.css";

function ListaDestinos({ destinos }) {
  return (
    <>
      <h2>Destinos disponibles</h2>

      <div className="lista-destinos">
        {destinos.map((destino) => (
          <Destino
            key={destino.id}
            nombre={destino.nombre}
            pais={destino.pais}
            actividades={destino.actividades}
            onSeleccionar={() => {
              window.location.href = `/destino/${destino.id}`;
            }}
          />
        ))}
      </div>
    </>
  );
}

function PaginaDetalle({ destinos }) {
  const { id } = useParams();

  const destino = destinos.find(
    (destino) => String(destino.id) === id
  );

  if (!destino) {
    return <p>Destino no encontrado.</p>;
  }

  return (
    <>
      <Link to="/">Volver a destinos</Link>
      <DetalleViaje destino={destino} />
    </>
  );
}

function App() {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    fetch("/api/destinos")
      .then((respuesta) => respuesta.json())
      .then((datos) => setDestinos(datos))
      .catch((error) => console.error(error));
  }, []);

  return (
    <BrowserRouter>
      <div className="contenedor">
        <h1>Agencia de Viajes</h1>
        <p>Explora los mejores destinos turísticos.</p>

        <Routes>
          <Route
            path="/"
            element={<ListaDestinos destinos={destinos} />}
          />

          <Route
            path="/destino/:id"
            element={<PaginaDetalle destinos={destinos} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

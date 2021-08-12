import React from "react";

const Formulario = ({ setBusquedaLetra }) => {
  const [busqueda, setBusqueda] = React.useState({
    artista: "",
    cancion: "",
  });
  const [error, setError] = React.useState(false);

  const { artista, cancion } = busqueda;

  const actualizarState = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const buscarInformacion = (e) => {
    e.preventDefault();
    if (!artista.trim() || !cancion.trim()) {
      setError(true);
      return;
    }

    setError(false);

    setBusquedaLetra(busqueda);
  };

  return (
    <div className="bg-info">
      <div className="container">
        {error ? (
          <p className="alert alert-danger text-center p-2">
            Todos los campos son obligatorios
          </p>
        ) : null}
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={(e) => buscarInformacion(e)}
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Artista</label>
                    <input
                      type="text"
                      name="artista"
                      id=""
                      placeholder="Nombre Artista"
                      className="form-control"
                      onChange={(e) => actualizarState(e)}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Cancion</label>
                    <input
                      type="text"
                      name="cancion"
                      id=""
                      placeholder="Cancion"
                      className="form-control"
                      onChange={(e) => actualizarState(e)}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;

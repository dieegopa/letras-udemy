import React from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import Cancion from "./components/Cancion";
import Info from "./components/Info";

function App() {

  const [busquedaLetra, setBusquedaLetra] = React.useState({});
  const [letra, setLetra] = React.useState("");
  const [info, setInfo] = React.useState({});
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) {
      return;
    }

    const consultarAPILetra = async () => {
      try {
        const { artista, cancion } = busquedaLetra;
        const url = `https://api.musixmatch.com/ws/1.1/track.search?q_artist=${artista}&q_track=${cancion}&apikey=${process.env.REACT_APP_MUSIC_API_KEY}`;

        const resultado = await axios(url);
        //console.log(resultado.data.message.body['track_list'][0].track);
        const { track_id } = resultado.data.message.body["track_list"][0].track;

        const url2 = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track_id}&apikey=${process.env.REACT_APP_MUSIC_API_KEY}`;
        const url3 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

        const [letra, informacion] = await Promise.all([
          axios(url2),
          axios(url3),
        ]);

        setLetra(letra.data.message.body.lyrics.lyrics_body);
        setInfo(informacion.data.artists[0]);

        setError(false);
        //setLetra(resultado2.data.message.body.lyrics.lyrics_body);
      } catch (error) {
        setLetra("");
        setInfo({});
        setError(true);
        //console.log(error);
      }
    };

    consultarAPILetra();
    setError(false);
    setLetra("");
    setInfo({});
  }, [busquedaLetra]);

  return (
    <>
      <Formulario setBusquedaLetra={setBusquedaLetra} />
      <div className="container mt-5">
        {error ? (
          <div className="row">
            <div className="col-12 bg-danger">
              <p className="text-uppercase text-light">
                No se encontraron resultados
              </p>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-6">
              <Info info={info} />
            </div>
            <div className="col-md-6">
              <Cancion letra={letra} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

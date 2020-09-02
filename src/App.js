import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Axios from 'axios';
import Cancion from './components/Cancion';
import InfoArtista from './components/InfoArtista';

function App() {

  // State de los términos a buscar
  let [busquedaLetra, guardarBusquedaLetra] = useState({});

  // State de las lyrics
  let [lyrics, guardarLyrics] = useState('');

  // State de la informacion del artista
  let [infoArtista, guardarInfoArtista] = useState({});

  // Función que se ejecuta cuando cambia el state busquedaLetra
  useEffect(() => {

    if(!Object.keys(busquedaLetra).length) return;

    const consultarLetraAPI = async () => {     
      let {artista, cancion} = busquedaLetra;
      let url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      let url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      let [letra, infoArtista] = await Promise.all([
        Axios.get(url),
        Axios.get(url2)
      ]);

      guardarLyrics(letra.data.lyrics);
      guardarInfoArtista(infoArtista.data.artists[0]);
    }

    consultarLetraAPI();
    
  }, [busquedaLetra]);

  return (
    <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <InfoArtista 
              infoArtista={infoArtista}
            />
          </div>
          <div className="col-md-6">
            <Cancion 
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

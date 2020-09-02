import React, { useState } from 'react';

const Formulario = ({guardarBusquedaLetra}) => {

    // State de los valores de la búsqueda
    let [terminos, guardarTerminos] = useState({
        artista: '',
        cancion: ''
    });
    
    // State del error
    let [error, guardarError] = useState(false);

    let {artista, cancion} = terminos;

    // Funcion que detecta cambios en los inputs
    const handleChange = e => {
        guardarTerminos({
            ...terminos,
            [e.target.name]: e.target.value
        });
    }

    // Funcion que valida el form y envia los datos al componente principal
    const handleSubmit = e => {
        e.preventDefault();

        // Validamos campos vacios
        if(!artista.trim() || !cancion.trim()) {
            guardarError(true);
            return;
        }

        // Enviamos datos al componente principal
        guardarError(false);
        guardarBusquedaLetra(terminos);
    }


    return (  
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={handleSubmit}
                    >  
                        <fieldset>
                            
                            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}

                            <legend className="text-center">Buscador letras canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre artista"
                                            onChange={handleChange}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre canción"
                                            onChange={handleChange}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;
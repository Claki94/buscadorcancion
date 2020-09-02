import React from 'react';

const InfoArtista = ({infoArtista}) => {
    if(!Object.keys(infoArtista).length) return null;

    let {strArtist, strBiographyES, strArtistThumb, strGenre} = infoArtista; 

    return (
        <div className="card border-light">
            <div className="card-header text-center bg-primary text-light font-weight-bold">
                {strArtist}
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo artista" />
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía:</h2>
                <p>{strBiographyES}</p>
            </div>
        </div>
    );
}
 
export default InfoArtista;
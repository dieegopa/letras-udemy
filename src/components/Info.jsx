import React from "react";

const Info = ({ info }) => {
  if (Object.keys(info).length === 0) return null;

  const { strArtistThumb, strGenre, strBiographyES, strBiographyEN } = info;
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Informacion Artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Artista" />
        <p className="card-text">{strGenre}</p>
        <h2 className="card-text">Bio</h2>
        {strBiographyES === null ? (
          <p className="card-text">{strBiographyEN}</p>
        ) : (
          <p className="card-text">{strBiographyES}</p>
        )}
        <p className="card-text">
          <a
            href={`https://${info.strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${info.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Info;

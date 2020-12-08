import React from "react";
import styled from "styled-components";
//component
import { Button } from "../../components/Utils/Button";
//constant
import { endpointImg } from "../../constant";
import { useNextFilm } from "../../hooks/useNextFilm";

const Card = styled.div``;
const CardImg = styled.figure``;
const CardTitle = styled.h2``;
const CardSubTitle = styled.h3``;

export const Film = () => {
  const { film, disableRight, disableLeft, nextFilm, position } = useNextFilm();

  return (
    <>
      {film ? (
        <Card>
          {film.backdrop_path && (
            <CardImg>
              <img
                alt={film.title}
                src={`${endpointImg}/${film.backdrop_path}`}
              />
            </CardImg>
          )}
          <CardTitle>{film.title}||{position}</CardTitle>
          <CardSubTitle>{film.release_date}</CardSubTitle>
          <Button disabled={disableLeft} onClick={() => nextFilm(-1)}>Back</Button>
          <Button disabled={disableRight} onClick={() => nextFilm(1)}>Next</Button>
        </Card>
      ) : (
        <h2>🎬</h2>
      )}
    </>
  );
};

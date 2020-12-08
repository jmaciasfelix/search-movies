import React from "react";
import styled from "styled-components";
//component
import { Button } from "../../components/Utils/Button";
import { LikeIcon } from "../../components/Icons/LikeIcon";
//constant
import { endpointImg } from "../../constant";
import { useNextFilm } from "../../hooks/useNextFilm";

const Card = styled.div``;
const CardImg = styled.figure`
    img{
        width:100%
    }
`;
const CardTitle = styled.h2``;
const CardSubTitle = styled.h3`
    font-weight: 400;
    font-size: 16px;
`;

export const Film = () => {
  const { film, disableRight, disableLeft, nextFilm, position } = useNextFilm();

  const handleLike = () => {
      console.log("handleLike")
  }

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
          <CardSubTitle>📡 {film.release_date}</CardSubTitle>
          <Button disabled={disableLeft} onClick={() => nextFilm(-1)}>Back</Button>
          <Button disabled={disableRight} onClick={() => nextFilm(1)}>Next</Button>
          <Button onClick={handleLike}><LikeIcon /></Button>
        </Card>
      ) : (
        <h2>Oops 🤯 you must do a search 🔍</h2>
      )}
    </>
  );
};

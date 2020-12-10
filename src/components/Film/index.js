import React from "react";
import styled from "styled-components";
//component
import { Button } from "../../components/Utils/Button";
import { LikeIcon } from "../../components/Icons/LikeIcon";
//constant
import { endpointImg } from "../../constant";
import { useNextFilm } from "../../hooks/useNextFilm";

const Card = styled.div`
  padding: 10px 0px;
`;
const CardImg = styled.figure`
  margin: 0;
  width: 100%;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;
const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    padding: 5px 20px;
    height: 30px;
  }
`;
const CardTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  padding: 0;
`;
const CardSubTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  padding: 0;
`;
const Spinner = styled.div`
  text-align: center;
  font-size: 32px;
  margin-top: 100px;
`;

export const Film = () => {
  const {
    film,
    loading,
    disableRight,
    disableLeft,
    nextFilm,
    position,
    total,
  } = useNextFilm();

  const handleLike = () => {
    console.log("handleLike");
  };

  return (
    <>
      {!loading ? (
        film ? (
          <Card>
            {film.backdrop_path && (
              <CardImg>
                <img
                  alt={film.title}
                  src={`${endpointImg}/${film.backdrop_path}`}
                />
              </CardImg>
            )}
            <span>
              {position + 1}/{total}
            </span>
            <CardTitle>{film.title}</CardTitle>
            <CardSubTitle>📡 {film.release_date}</CardSubTitle>
            <GroupButtons>
              <Button disabled={disableLeft} onClick={() => nextFilm(-1)}>
                Back
              </Button>
              <Button disabled={disableRight} onClick={() => nextFilm(1)}>
                Next
              </Button>
              <Button onClick={handleLike}>
                <LikeIcon />
              </Button>
            </GroupButtons>
          </Card>
        ) : (
          <h2>Oops 🤯 you must do a search 🔍</h2>
        )
      ) : (
        <Spinner>⌛</Spinner>
      )}
    </>
  );
};

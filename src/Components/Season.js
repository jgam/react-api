import React from 'react';

import styled from 'styled-components';

const Backdrop = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  justify-contents: center;
  align-items: center;
  margin-top: 10px;
`;

const SeasonDiv = styled.div`
  margin: 10px 40px;
  align-items: center;
`;

const CurrentSeason = styled.div`
  display:flex
`;

function Season(poster) {
  console.log(poster);
  console.log(poster.poster);
  console.log(poster.poster[0].name)
  //now poster is differen
  poster.poster.map(singleposter => 
    console.log(singleposter)
    )
  return (
    <CurrentSeason>
    {poster.poster.map((singleposter, index) =>
      <SeasonDiv key={index}>
      {singleposter.name}
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/w200/${singleposter.poster_path}`}
      />
    </SeasonDiv>
    )}
    </CurrentSeason>
    
  );
}

export default Season;

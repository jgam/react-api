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

function Season(poster) {
  console.log(poster);
  return (
    <SeasonDiv>
      {poster.poster.name}
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/w200/${poster.poster.poster_path}`}
      />
    </SeasonDiv>
  );
}

export default Season;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, withRouter, Switch } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import Season from '../../Components/Season';
import Loader from '../../Components/Loader';
import Productions from '../../Components/Productions';
import Video from '../../Components/Video';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10 px;
`;

const Overview = styled.p`
font-size; 12px;
opacity: 0.7;
line-height: 1.5;
width: 50%;`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

const TwoButtons = styled.button`
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  font: 200 0.6rem 'Roboto Slab', sans-serif;
  padding: 1em 2em;
  letter-spacing: 0.05rem;
  border-radius: 30px;
  margin-right: 20px;
  &:focus {
    outline: 2px dotted #55d7dc;
  }
`;

const ChallengeContainer = styled.div``;

const IMDBButton = styled.span`
  font-size: 13px;
  color: black;
  font-weight: bold;
  background-color: #f5c518;
  border: 1px solid black;
  &:hover {
    opacity: 0.6;
  }
`;

function DetailPresenter({ pathname, result, loading, error, isMovie }) {
  const [isYoutube, setYoutube] = useState(false);

  function buttonClick(e) {
    e.preventDefault();
    console.log('video button Clicked');
    setYoutube(true);
  }

  function buttonnClick(e) {
    e.preventDefault();
    setYoutube(false);
  }
  console.log(result);
  console.log('here is presenter');
  console.log(pathname);
  const currentURL = isMovie ? 'movie' : 'show';
  console.log(currentURL);
  return loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{' '}
          | Nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require('../../assets/noPosterSmall.png')
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider> • </Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]}min
            </Item>
            <Divider> • </Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            {result.imdb_id && (
              <>
                <Divider> • </Divider>
                <a href={`https://www.imdb.com/title/${result.imdb_id}`}>
                  <IMDBButton>IMDB</IMDBButton>
                </a>
              </>
            )}
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <ButtonContainer>
            <Link to={`/${currentURL}/${result.id}/videos`}>
              <TwoButtons>Videos</TwoButtons>
            </Link>
            <Link to={`/${currentURL}/${result.id}/productions`}>
              <TwoButtons>Productions</TwoButtons>
            </Link>
            {!isMovie ? (
              <Link to={`/show/${result.id}/seasons`}>
                <TwoButtons>Seasons</TwoButtons>
              </Link>
            ) : null}
          </ButtonContainer>
          <ChallengeContainer>
            <Switch>
              <Route
                path={`/${currentURL}/:id/videos`}
                component={() => (
                  <Video
                    sourceURL={`https://www.youtube.com/embed/${result.videos.results[0].key}`}
                  />
                )}
              />
              <Route
                path={`/${currentURL}/:id/productions`}
                component={() => (
                  <Productions
                    companies={result.production_companies}
                    countries={
                      isMovie ? result.production_countries : result.seasons
                    }
                    isMovie={isMovie}
                    moreInfo={result}
                  />
                )}
              />
              <Route
                path='/show/:id/seasons'
                component={() => <Season poster={result.seasons} />}
              />
            </Switch>
          </ChallengeContainer>
        </Data>
      </Content>
    </Container>
  );
}

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;

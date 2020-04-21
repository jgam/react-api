import React, { useState, useEffect } from 'react';
import { moviesApi } from '../api';

import Loader from '../Components/Loader';
import styled from 'styled-components';

const Company = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
`;

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  justify-contents: center;
  align-items: center;
`;

const CompanyName = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

function ProductionCompanies({ company, company_logo }) {
  return (
    <Company>
      <CompanyName>{company}</CompanyName>
      {company_logo && (
        <Backdrop bgImage={`https://image.tmdb.org/t/p/w400/${company_logo}`} />
      )}
    </Company>
  );
}

export default ProductionCompanies;

import React, { useEffect } from 'react';
import ProductionCountries from './ProductionCountries';
import ProductionCompanies from './ProductionCompanies';
import styled from 'styled-components';

import Season from '../Components/Season';

const CompaniesBorder = styled.div`
  display: flex;
  position: relative;
`;

const ProductionBorder = styled.div`
  display: flex;
  position: relative;
`;

const ProdTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: 400;
`;

const CountryLanguage = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin: 20px 30px;
`;

function Productions({ companies, countries, isMovie, moreInfo }) {
  return (
    <div>
      <ProdTitle>Production Companies</ProdTitle>
      <CompaniesBorder>
        {companies.map((company) => (
          <ProductionCompanies
            key={company.id}
            company={company.name}
            company_logo={company.logo_path}
          />
        ))}
      </CompaniesBorder>
      {isMovie ? null : (
        <>
          <ProdTitle>Country and Language</ProdTitle>
          <CountryLanguage>
            {moreInfo.origin_country[0]} | {moreInfo.original_language}
          </CountryLanguage>
        </>
      )}
      <ProdTitle>{isMovie ? 'Production Countries' : 'Seasons'}</ProdTitle>
      {isMovie ? (
        <ProductionBorder>
          {countries.map((country, index) => (
            <ProductionCountries key={index} country={country} />
          ))}
        </ProductionBorder>
      ) : (
        <ProductionBorder>
          {countries.map((season, index) => (
            <Season key={index} poster={season} />
          ))}
        </ProductionBorder>
      )}
    </div>
  );
}

export default Productions;

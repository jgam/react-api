import React, { useEffect } from 'react';
import ProductionCountries from './ProductionCountries';
import ProductionCompanies from './ProductionCompanies';
import styled from 'styled-components';

const CompaniesBorder = styled.div``;

const ProductionBorder = styled.div``;

function Productions({ companies, countries }) {
  return (
    <div>
      <CompaniesBorder>
        Production Companies
        {companies.map((company) => (
          <ProductionCompanies
            key={company.id}
            company={company.name}
            company_logo={company.logo_path}
          />
        ))}
      </CompaniesBorder>

      <ProductionBorder>
        Production Countries
        {countries.map((country, index) => (
          <ProductionCountries key={index} country={country} />
        ))}
      </ProductionBorder>
    </div>
  );
}

export default Productions;

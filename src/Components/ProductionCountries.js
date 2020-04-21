import React from 'react';
import styled from 'styled-components';

const Countries = styled.div`
  margin-right: 15px;
`;
function ProductionCountries({ country }) {
  return <Countries>{country.name}</Countries>;
}

export default ProductionCountries;

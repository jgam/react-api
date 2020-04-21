import React, { useState, useEffect } from 'react';
import { moviesApi } from '../api';

import Loader from '../Components/Loader';

function ProductionCompanies({ company, company_logo }) {
  const [mimage, setImage] = useState();
  const [loading, setLoading] = useState(true);

  async function getMovieimage(id) {
    try {
      const movieImage = await moviesApi.movieImage(id);
      //here set movies
      setImage(movieImage);
    } catch (e) {
      console.log(e);
    } finally {
      //setLoading false
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovieimage(company_logo);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        {mimage}
        {company}
      </div>
    );
  }
}

export default ProductionCompanies;

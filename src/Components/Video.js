import React from 'react';

function Video({ sourceURL }) {
  return <iframe src={sourceURL} width='500' height='400'></iframe>;
}

export default Video;

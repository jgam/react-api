import React from 'react';

function Video({ sourceURL }) {
  console.log('got in to video')
  return <iframe src={sourceURL} width='500' height='400'></iframe>;
}

export default Video;

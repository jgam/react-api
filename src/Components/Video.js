import React from 'react';

function Video({ sourceURL }) {
  return <iframe src={sourceURL}></iframe>;
}

export default Video;

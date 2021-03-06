/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './POPOSDetails.css';
import data from './sfpopos-data.json';
import POPOSFeatureList from './POPOSFeatureList';

function POPOSDetails(props) {
  const { id } = props.match.params; // Location index
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <div className='details'>
      <div className='image'>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} />
      </div>

      <div className='details-info'>
        <h1 className='title'>{title}</h1>
        <p className='desc'>{desc}</p>
        <p className='hours'>{hours}</p>
        <POPOSFeatureList features={features} />
        <p className='geo'>
          {geo.lat} {geo.lon}
        </p>
      </div>
    </div>
  );
}

export default POPOSDetails;

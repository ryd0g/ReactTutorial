import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';

function POPOSList() {
  return (
    <div className='POPOSList'>
      <POPOSSpace
        name='Garden Terrace'
        address='150 California St.'
        image='garden-terrace-at-150-california.jpg'
      />
      <POPOSSpace
        name='100 Pine Street'
        address='100 Pine St.'
        image='100-pine.jpg'
      />
      <POPOSSpace
        name='Citigroup Center'
        address='1 Sansome St.'
        image='citigroup-center.jpg'
      />
      <POPOSSpace
        name='Embarcadero Center'
        address='San Francisco, CA 94111'
        image='embarcadero-center.jpg'
      />
      <POPOSSpace
        name='Sansome Roof Garden'
        address='343 Sansome St.'
        image='343-sansome-roof-garden.jpg'
      />
      <POPOSSpace
        name='Market Street Plaza'
        address='525 Market St.'
        image='525-market-street-plaza.jpg'
      />
    </div>
  );
}

export default POPOSList;

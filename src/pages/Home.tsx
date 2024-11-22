import React from 'react';
import MapComponent from '../components/MapComponent';
import Navbar from '../components/Navbar';

const Homepage: React.FC = () => {
  return (
    <>
      <Navbar />
      <MapComponent />
    </>
  );
};

export default Homepage;

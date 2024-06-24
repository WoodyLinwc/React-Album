import React from 'react';
import useWindowSize from '../hooks/useWindowSize';
import ImageCarousel from './ImageCarousel';
import VerticalCarousel from './VerticalCarousel';

const ResponsiveCarousel: React.FC = () => {
  const windowSize = useWindowSize();
  
  // You can adjust this breakpoint as needed
  const isMobile = windowSize.width !== undefined && windowSize.width < 768;

  const containerStyle = {
    padding: '10%',
    ...(isMobile ? {} : { marginTop: '-50px' })
  };

  return (
    <div style={containerStyle}>
      {isMobile ? <VerticalCarousel /> : <ImageCarousel />}
    </div>
  );
};

export default ResponsiveCarousel;
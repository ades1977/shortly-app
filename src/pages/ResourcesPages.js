import React from 'react';
import { Content } from '../components/Content/Content';
import { shortlyThree } from '../data/ShortlyData';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';

const ResaourcesPages = () => {
  return (
    <>  
    <Content {...shortlyThree} />
    <Carousel />
    <Footer />
    </>
  )
}

export default ResaourcesPages
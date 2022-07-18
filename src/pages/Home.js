import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Shortly from '../components/Shortlys/Shortlys';
import { shortlyOne, shortlyTwo, shortlyThree } from '../data/ShortlyData';
import SearchBox  from '../components/SearchBox/SearchBox';

// Hero Feature Content Carousel

const Home = () => {
	return (
		<>
			<Shortly />  
			<SearchBox />    
			<Features />
			<Content {...shortlyOne} />
			<Content {...shortlyTwo} />
			<Content {...shortlyThree} />
			<Carousel />
			<Footer />
		</>
	);
};

export default Home
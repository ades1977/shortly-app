import React from 'react'; 
import { Content } from '../../components/Content/Content';
import { shortlyHeader } from '../../data/ShortlyData';

const Shortly = () => {
	return (    
		<>
		<Content {...shortlyHeader} />  
		</>
	);
};

export default Shortly;
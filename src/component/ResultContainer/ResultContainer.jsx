import React from'react';
import './ResultContainer.css';
import NameCard from '../NameCard/NameCard';

const ResultContainer = ({suggestedNames}) =>{
    const suggestedJsx = suggestedNames.map((suggestedName) => {
       return <NameCard key={suggestedName} suggestedName={suggestedName} />});
    return(
        <div className='results-container'>
            {suggestedJsx}
         
         <p>don't forgot to use '#' at the beginning.</p>
         
         </div>
         

    )
}
export default ResultContainer;


import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({toys, donate, like}) => {
  return(
    <div id="toy-collection">
      {toys.map( toy => <div><ToyCard like={like} donateMe={donate} toy={toy}/></div>)}
    </div>
  );
}

export default ToyContainer;
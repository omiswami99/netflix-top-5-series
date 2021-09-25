import React from 'react';
import sdata from './sdata';
import Card from './Card';

const App = () =>{
    return (<>
    <h1 className="heading_style">TOP 5 NETFLIX SERIES</h1>
    
    <div className="wrapper">
      <div className="cards_wrap">

        {sdata.map((val) => {
          return (  <Card
              key = {val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
            />
          );
        })}
        
      </div>
    </div>

  </>)
}

export default App;
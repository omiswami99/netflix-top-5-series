import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import sdata from './sdata';
import './index.css';


ReactDOM.render(
  <>
    <h1 className="heading_style">TOP 5 NETFLIX SERIES</h1>
    
    <div className="wrapper">
      <div className="cards_wrap">

        {sdata.map((val) => {
          return (  <Card
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
            />
          );
        })}
        
      </div>
    </div>

  </>,
  document.getElementById('root')
);

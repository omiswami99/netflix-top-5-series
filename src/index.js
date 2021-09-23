import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import sdata from './sdata';
import './index.css';

ReactDOM.render(
  <>
    <h1 className="heading_style">TOP 5 NETFLIX SERIES</h1>
    <div class="wrapper">
                <div class="cards_wrap">
    <Card 
      imgsrc = {sdata[0].imgsrc}
      title  = {sdata[0].title}
      sname  = {sdata[0].sname}
      link   = {sdata[0].link}
    />

    <Card 
      imgsrc = {sdata[1].imgsrc}
      title  = {sdata[1].title}
      sname  = {sdata[1].sname}
      link   = {sdata[1].link}
    />

    <Card 
      imgsrc = {sdata[2].imgsrc}
      title  = {sdata[2].title}
      sname  = {sdata[2].sname}
      link   = {sdata[2].link}
    />

    <Card 
      imgsrc = {sdata[3].imgsrc}
      title  = {sdata[3].title}
      sname  = {sdata[3].sname}
      link   = {sdata[3].link}
    />

    <Card 
      imgsrc = {sdata[4].imgsrc}
      title  = {sdata[4].title}
      sname  = {sdata[4].sname}
      link   = {sdata[4].link}
    />

    </div>
    </div>
  </>,
  document.getElementById('root')
);

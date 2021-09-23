import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import seriesdata from './sdata';
import './index.css';

ReactDOM.render(
  <>
    <h1 className="heading_style">TOP 5 NETFLIX SERIES</h1>
    <div class="wrapper">
                <div class="cards_wrap">
    <Card 
      imgsrc = {seriesdata[0].imgsrc}
      title  = {seriesdata[0].title}
      sname  = {seriesdata[0].sname}
      link   = {seriesdata[0].link}
    />

    <Card 
      imgsrc = {seriesdata[1].imgsrc}
      title  = {seriesdata[1].title}
      sname  = {seriesdata[1].sname}
      link   = {seriesdata[1].link}
    />

    <Card 
      imgsrc = {seriesdata[2].imgsrc}
      title  = {seriesdata[2].title}
      sname  = {seriesdata[2].sname}
      link   = {seriesdata[2].link}
    />

    <Card 
      imgsrc = {seriesdata[3].imgsrc}
      title  = {seriesdata[3].title}
      sname  = {seriesdata[3].sname}
      link   = {seriesdata[3].link}
    />

    <Card 
      imgsrc = {seriesdata[4].imgsrc}
      title  = {seriesdata[4].title}
      sname  = {seriesdata[4].sname}
      link   = {seriesdata[4].link}
    />

    </div>
    </div>
  </>,
  document.getElementById('root')
);

import React from 'react';

function Card(props) {
    return (
        <>
            <div className="card_item">
                <div className="card_inner">
                    <div className="card_top">
                        <img src={props.imgsrc} alt="car" />
                    </div>
                    <div className="card_bottom">
                        <div className="card_category">
                            {props.sname}
                        </div>
                        <div className="card_info">
                            <p className="title">{props.title}</p>
                        </div>
                        <div className="card_creator">
                            <a href={props.link} target="_blank"><button>WATCH NOW</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
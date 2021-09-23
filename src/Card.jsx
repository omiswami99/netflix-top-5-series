import React from 'react';

function Card(props) {
    return (
        <>
            <div class="card_item">
                <div class="card_inner">
                    <div class="card_top">
                        <img src={props.imgsrc} alt="car" />
                    </div>
                    <div class="card_bottom">
                        <div class="card_category">
                            {props.sname}
                        </div>
                        <div class="card_info">
                            <p class="title">{props.title}</p>
                        </div>
                        <div class="card_creator">
                            <a href={props.link} target="_blank"><button>WATCH NOW</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
import React from "react";
import Sdata from "./Data";

const Card = ({data}) => (
    <div className="card">
        <img src={data.imgsrc} alt="myPic" className="card__img"></img>
        <div className="card__info">
            <span className="card__category">{data.title}</span>
            <h3 className="card__title">{data.sname}</h3>
            <a href={data.link} target="_blank">
                <button>Watch Now</button>
            </a>
        </div>
    </div>
)

function Cards() {
    return (
        <div className='cards'>
            {Sdata.map( data => (
                <Card 
                    key = {data.id}
                    data = {data}
                />
            ))}
        </div>
    )
}

export default Cards;

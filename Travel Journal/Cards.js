import React from "react";
import ReactDOM from "react-dom";
import data from "./data";

export default function Cards(props) {
  return (
    <div className='cards'>
      <div className='image'>
        <img src={`${props.item.imageUrl}`} className='card--image' />
      </div>
      <div className='info'>
        <div className='header'>
          <p>{props.item.location}</p>
          <p>
            <a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
          </p>
        </div>
        <div className='last'>
          <h1>{props.item.title}</h1>
          <p className='dates'>
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p className='description-info'>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}

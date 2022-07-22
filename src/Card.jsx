import { useState } from 'react'
import reactLogo from './assets/react.svg'
import locationPin from './assets/location_pin.png'
import './App.css'

export default function Card(props) {
    return(
        <div className="card--container">
            <img src={props.imageUrl} className="card--img" />
            <div classname="card--text">
                <div className="location">
                    <img src={locationPin} className="card--locationPin" />
                    <h3 className="card--locationText">{props.location}</h3>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="card--name">{props.title}</h1>
                <h4 className="card--dates">{props.startDate} - {props.endDate}</h4>
                <p className='card--description'>{props.description}</p>
            </div>
        </div>
    )
}
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import hotel from '../why/hotel.jpg'
import bus from '../why/bus.jpg';
import guide from '../why/guide.jpg'

const WhyUs = () => {
    return (
        <div className="pt-5 mt-5" id="why">
            <h2> Why Us</h2>
            <div className="d-flex">
                <div className="mx-auto">
                    <img src={bus} style={{ width: '22rem' }}></img>
                    <h3>Special Bus Service</h3>
                </div>
                <div className="mx-auto h-50">
                    <img src={hotel} style={{ width: '22rem' }}></img>
                    <h3>5 star Hotel</h3>
                </div>
                <div className="mx-auto h-50">
                    <img src={guide} style={{ width: '22rem' }}></img>
                    <h3>Experienced tour Guide</h3>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import UseAuth from '../../hook/UseAuth';

const Pack = () => {
    const { user } = UseAuth()
    const { pack } = useParams();
    const [Pack, setPack] = useState([])
    useEffect(() => {
        fetch('https://peaceful-coast-40911.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setPack(data))
    })
    const data = Pack?.find(item => pack == (item._id))


    const { register, handleSubmit } = useForm();
    const onSubmit = () => {
        const proceed = window.confirm('Confirm Booking')
        if (proceed) {
            axios.post('https://peaceful-coast-40911.herokuapp.com/booking', {
                email: user.email,
                name: data.name,
                price: data.price,
                picture: data.picture,
                about: data.about,
                days: data.days
            })
                .then(res => console.log(res))
        };
    }
    return (

        <div>

            {data &&
                <div>
                    <div className="d-flex border round p-2 m-2">
                        <div className="m-3  mx-auto">
                            <Card.Img variant="top" src={data.picture} style={{ width: '30rem' }} />
                        </div>
                        <div className="m-3  mx-auto">
                            <Card.Body style={{ width: '30rem' }}>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Title>Price: Only {data.price}Taka</Card.Title>
                                <Card.Title>Days: {data.days}</Card.Title>
                                <Card.Text> {data.about}</Card.Text>
                            </Card.Body>
                        </div>

                    </div>
                    <h2 className="text-primary rounded p-2">{user?.displayName}</h2>
                    <h3>Book Now</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="pt-1">
                        <input className="mt-3" placeholder="your Name" {...register("firstName")} /><br />
                        <input className="mt-3" type="email" placeholder="your Email" {...register("email")} /><br />
                        <input className="mt-3" type="submit" placeholder="Confirm Booking" {...register("Book")} /><br />

                    </form>
                </div>
            }
        </div>
    );
};

export default Pack;
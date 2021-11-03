import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Alert, Card, Modal } from 'react-bootstrap';
import UseAuth from '../share/hook/UseAuth';


const MyBooking = () => {
    const [booking, setBooking] = useState([]);
    const { user } = UseAuth()
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBooking(data))
    })


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to  Cancel?')
        if (proceed) {
            const url = `http://localhost:5000/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedcount > 0) {
                        alert("delete successfully");
                        const remaining = booking.filter(book => book._id)
                    }
                })
        }
    }
    return (
        <div className="mt-5 pt-2">

            {
                booking.map(book =>
                    ((user.email) === (book.email)) &&
                    <div className="d-flex border round p-2 m-2">
                        <div className="m-3  mx-auto">
                            <Card.Img variant="top" src={book.picture} style={{ width: '30rem' }} />
                        </div>
                        <div className="m-3  mx-auto">
                            <Card.Body style={{ width: '30rem' }}>
                                <Card.Title>{book.name}</Card.Title>
                                <Card.Title>Price: Only {book.price}Taka</Card.Title>
                                <Card.Title>Days: {book.days}</Card.Title>
                                <Card.Text> {book.about}</Card.Text>
                                <button className="btn btn-danger" onClick={() => handleDelete(book._id)}>Cancel</button>
                            </Card.Body>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default MyBooking;
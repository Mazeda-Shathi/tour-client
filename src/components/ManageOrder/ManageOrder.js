import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import UseAuth from '../share/hook/UseAuth';

const ManageOrder = () => {
    const [manageOrder, setManageOrder] = useState([]);
    const [status, setStatus] = useState(" ")
    const { user } = UseAuth();
    useEffect(() => {
        fetch('https://peaceful-coast-40911.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setManageOrder(data))
    })


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to  delete?')
        if (proceed) {
            const url = `https://peaceful-coast-40911.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedcount > 0) {
                        alert("delete successfully");
                        const remaining = manageOrder.filter(order => order._id)
                    }
                })
        }
    }

    return (
        <div className="mt-5 pt-2">

            {
                manageOrder.map(order =>
                    <div className="d-flex border round p-2 m-2">
                        <div className="m-3  mx-auto">
                            <Card.Img variant="top" src={order.picture} style={{ width: '30rem' }} />
                        </div>
                        <div className="m-3  mx-auto">
                            <Card.Body style={{ width: '30rem' }}>
                                <Card.Title>{order.name}</Card.Title>
                                <Card.Title>Price: Only {order.price}Taka</Card.Title>
                                <Card.Title>Days: {order.days}</Card.Title>
                                <Card.Text> {order.about}</Card.Text>
                                <h4>Order by:<span className="text-danger"> {order.email}</span></h4>
                                <button className="btn btn-danger" onClick={() => handleDelete(order._id)}>Delete</button>
                            </Card.Body>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default ManageOrder;
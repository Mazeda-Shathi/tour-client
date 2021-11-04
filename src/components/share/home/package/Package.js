import { useSSRSafeId } from '@react-aria/ssr';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = () => {
    const [Packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-coast-40911.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div id="package" className="mt-5 pt-5">
            <h2>PACKAGES</h2>
            {
                Packages.map(Package =>
                    <div className="d-flex border round p-2 m-2">
                        <div className="m-3  mx-auto">
                            <Card.Img variant="top" src={Package.picture} style={{ width: '30rem' }} />
                        </div>
                        <div className="m-3  mx-auto">
                            <Card.Body style={{ width: '30rem' }}>
                                <Card.Title>{Package.name}</Card.Title>
                                <Card.Title>Price: Only {Package.price}Taka</Card.Title>
                                <Card.Title>Days: {Package.days}</Card.Title>
                                <Card.Text> {Package.about}</Card.Text>
                                <Link to={`/package/${Package._id}`}> <Button className="btn btn-danger" variant="primary">Book Now</Button></Link>
                            </Card.Body>
                        </div>

                    </div>
                )
            }
        </div >
    )
};

export default Package;
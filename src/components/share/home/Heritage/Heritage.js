import React from 'react';
import img1 from '../../../../components/lalbagfort.jfif'
import img2 from '../../../../components/mohasthangor.jpg'
import img3 from '../../../../components/panam.jpg'
import img4 from '../../../../components/shalbon bihar.jpg'
import img5 from '../../../../components/shundorpur.jpg'
import img6 from '../../../../components/somapurMohabihar.jfif'
import { Col, Container, Row } from 'react-bootstrap';
import '../Heritage/Heritage.css'


const Heritage = () => {

    return (
        <div id="heritage">
            <h2>Heritage Site visit</h2>
            <Container>
                <Row >
                    <Col>
                        <img src={img1} className="heritage"></img>
                        <h3 className="text-primary">Lalbag Fort <button className=" mx-auto bg-primary text-light rounded ">Details</button></h3>
                    </Col>
                    <Col>
                        <img src={img2} className="heritage"></img>
                        <h3 className="text-primary">Mohasthangor <button className=" mx-auto bg-primary text-light rounded ">Details</button></h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={img3} className="heritage"></img>
                        <h3 className="text-primary">Panam City <button className=" mx-auto bg-primary text-light rounded ">Details</button></h3>
                    </Col>
                    <Col>
                        <img src={img4} className="heritage"></img>
                        <h3 className="text-primary">Shalbon Bihar <button className=" mx-auto bg-primary text-light rounded ">Details</button></h3>
                    </Col>
                </Row >
                <Row >

                    <Col>
                        <img src={img5} className="heritage"></img>
                        <h3 className="text-primary">Sundorpur <button className=" mx-auto bg-primary text-light rounded ">Details</button></h3>
                    </Col>
                    <Col>
                        <img src={img6} className="heritage"></img>
                        <h3 className="text-primary">Somapur Mohabihar <button className=" mx-auto bg-primary text-light rounded ">Details</button></h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Heritage;
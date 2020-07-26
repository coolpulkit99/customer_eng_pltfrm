import React from 'react';
import {
    Badge, Row, Col, Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';

const Badges = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col xs="12" md="12" sm="12">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-arrange-send-backward mr-2"> </i>
                            Social Media Content
                        </CardTitle>
                        <CardBody className="">
                            <Row>
                                <Col xs="12" md="4">
                                    {/*--------------------------------------------------------------------------------*/}
                                    {/*Card-1*/}
                                    {/*--------------------------------------------------------------------------------*/}
                                    <Card>
                                        <CardImg top width="100%" src={img1} />
                                        <CardBody>
                                            <CardTitle>Card title</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col xs="12" md="4">
                                    {/*--------------------------------------------------------------------------------*/}
                                    {/*Card-1*/}
                                    {/*--------------------------------------------------------------------------------*/}
                                    <Card>
                                        <CardImg top width="100%" src={img2} />
                                        <CardBody>
                                            <CardTitle>Card title</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col xs="12" md="4">
                                    {/*--------------------------------------------------------------------------------*/}
                                    {/*Card-1*/}
                                    {/*--------------------------------------------------------------------------------*/}
                                    <Card>
                                        <CardImg top width="100%" src={img3} />
                                        <CardBody>
                                            <CardTitle>Card title</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
        </div >
    );
}

export default Badges;

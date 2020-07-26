import React, { useState, useEffect } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

const Alerts = () => {
    const [Articles, setArticles] = useState([]);
    useEffect(() => {
        fetch("https://api-hoaxy.p.rapidapi.com/articles?sort_by=relevant&use_lucene_syntax=true&query=lysol", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "api-hoaxy.p.rapidapi.com",
                "x-rapidapi-key": "a372629497msh19118ecc851e31dp1350edjsna580db8fe1f8"
            }
        })
            .then(response => response.json())
            .then(jsonresp => {
                setArticles(jsonresp["articles"]);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div>
            <Row>
                <Col xs="12" md="12">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-toggle-switch mr-2"> </i>
                Mention in popular media
              </CardTitle>
                        {
                            Articles.map((element, i) => {
                                return (<div>
                                    <a href={element.canonical_url}>
                                        <CardBody className="">
                                            <Col xs="12" md="12">
                                                <Card>
                                                    <CardTitle className="bg-light border-bottom p-3 mb-0">{element.title}
                                                        <br></br>
                                                        {/* <i className="mdi mdi-toggle-switch mr-2">Nature:{element.site_type} </i> */}
                                                    </CardTitle>
                                                    <CardBody>
                                                        Number of tweets : {element.number_of_tweets}
                                                        <br></br>
                                                Date Published : {element.date_published}
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </CardBody>
                                    </a>
                                </div>);
                            })
                        }
                    </Card>
                </Col></Row>

        </div>
    );
}

export default Alerts;

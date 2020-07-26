import React, { useState, useEffect } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col
} from 'reactstrap';
import { SalesSummary, Projects, Feeds } from 'components/dashboard-components';





const Starter = () => {
    const [Reviews, setReviews] = useState([]);
    const [RatingCount, setRatingCount] = useState([0, 0, 0, 0, 0]);

    useEffect(() => {

        const useApi = 0;
        //fetch reviews
        if (useApi) {
            fetch("https://amazon-product-reviews-keywords.p.rapidapi.com/product/reviews?page=10&country=IN&asin=B016D3J92M", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com",
                    "x-rapidapi-key": "18cc2ceafemsh952c9b66d79c8b5p15327bjsn1ece41f4259a"
                }
            })
                .then(response => response.json())
                .then(jsonresp => {
                    console.log(jsonresp["reviews"]);
                    let ratings = [0, 0, 0, 0, 0];
                    jsonresp["reviews"].forEach(element => {

                        //track rating count
                        if (element["rating"] > 0) {
                            ratings[element["rating"] - 1] = ratings[element["rating"] - 1] + 1
                        }
                    });
                    // setReviews(jsonresp["reviews"]);
                    setRatingCount(ratings);
                    setReviews(jsonresp["reviews"]);
                    
                })
                .catch(err => {
                    // setRatingCount(RatingCount);

                    // setReviews(Reviews);

                    console.log(err);
                });
        }

    },[]);



    return (
        <div>
            <Row>
                <Col sm={6} lg={8}>
                    <SalesSummary dataval={RatingCount} />
                </Col>
                {/* <Col sm={6} lg={4}>
                    <Feeds />
                </Col> */}
            </Row>
            <Row>
                <Col sm={12}>
                    <Projects reviews={Reviews} />
                </Col>
            </Row>
            
        </div>
    );
}

export default Starter;

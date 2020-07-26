import React from "react";

import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import img3 from 'assets/images/users/3.jpg';
import img4 from 'assets/images/users/4.jpg';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Projects = (props) => {
    console.log(props);
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Realtime reviews</CardTitle>
                        <CardSubtitle>Review and nature</CardSubtitle>
                    </div>
                   
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Name</th>
                            <th className="border-0">Site</th>
                            <th className="border-0">Status</th>
                            <th className="border-0">Review Data</th>
                            <th className="border-0">Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        
                     { 
                     props.reviews.map((element, i) => {
                        //  console.log(element);
                        let color=element["rating"]>2?"purple":"orange";
                       return (
                       <tr>
                        <td>
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
                                <div className="">
                                    <h5 className="mb-0 font-16 font-medium">{element["name"]}</h5><span></span></div>
                            </div>
                        </td>
                        <td>Amazon</td>

                        <td>
                            <i className={"fa fa-circle text-"+color} id="tlp1"></i>

                        </td>
                        <td>{element["review_data"]}</td>
                        <td>{element["review"]}</td>
                    </tr>
                    );  
                     })  
                     }


                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
}

export default Projects;

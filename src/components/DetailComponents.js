import React, { Component } from 'react';
import { Media } from 'reactstrap';
import dateFormat from 'dateformat';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';



class Detail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const comment = this.props.dish.comments.map ((comments) =>{
            var dateFormat = require('dateformat');
            var now = new Date();
            dateFormat = dateFormat(comments.date, "mmm dd, yyyy");
        return(
            <div key={comments.id}>
                <p>{comments.comment}</p>
                <p>-- {comments.author}, {dateFormat}</p>
            </div>
        );
    })
    
    return(
        <div className="container">
        <div className="row">
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name}/>
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
        <h1>Comment</h1>
            {comment}
        </div>
        </div>
         </div>
    );

}

    

}



export default Detail;

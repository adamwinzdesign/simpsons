import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import '../index.css';

const QuoteCard = (props) => {
  return (
    <div className = 'card-contain' key = '{props.key}'>
      <Card body inverse color="dark">
        <CardBody>
          <CardTitle className = 'title'>Character: {props.character}</CardTitle>
          <CardText className = 'quoteText'>Character Quote: "{props.quote}"</CardText>
          <img src = {props.image} alt = 'quoted character'/>
        </CardBody>
      </Card>

    </div>
  )
}

export default QuoteCard;

import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import '../index.css';

const QuoteCard = (props) => {
  return (
    <div className = 'card-contain' key = '{props.id}'>
      <Card body inverse color="dark">
        <CardBody>
          <CardTitle>Character Name: {props.character}</CardTitle>
          <CardText>Character Quote {props.quote}</CardText>
          <CardText>Some Other Stuff</CardText>
        </CardBody>
      </Card>

    </div>
  )
}

export default QuoteCard;
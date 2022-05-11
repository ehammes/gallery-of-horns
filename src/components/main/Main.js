import React from 'react';
import HornedBeast from '../hornedBeast/HornedBeast.js'
import {Container, Row} from 'react-bootstrap';
import './Main.css'
import data from '../data.json';

class Main extends React.Component {

  render() {

    let beast = [];
    data.forEach((animal, idx) => {
      // console.log(animal.image_url);
      beast.push(
        <HornedBeast
          imageURL={animal.image_url}
          title={animal.title}
          alt={animal.keyword}
          description={animal.description}
          key={idx}
        />)
    });

    return (
      <main className="main-area">
        <Container>
          <Row xs={2} md={4}>
            {beast}
          </Row>
        </Container>
      </main>
    )
  }
}

export default Main;
import React from 'react';
import HornedBeast from '../hornedBeast/HornedBeast.js'
import {Container, Row} from 'react-bootstrap';
import './Main.css'

class Main extends React.Component {

  render() {

    let beast = this.props.data.map((animal, idx) => {
      return(
        <HornedBeast
          imageURL={animal.image_url}
          title={animal.title}
          alt={animal.keyword}
          description={animal.description}
          key={idx}
          openModalHandler={this.props.openModalHandler}
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
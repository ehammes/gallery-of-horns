import React from 'react';
import HornedBeast from '../hornedBeast/HornedBeast.js'
import { Container, Row, Form } from 'react-bootstrap';
import './Main.css'

class Main extends React.Component {


  render() {

    let beast = this.props.data.map((animal, idx) => {
      return (
        <HornedBeast
          imageURL={animal.image_url}
          title={animal.title}
          alt={animal.keyword}
          description={animal.description}
          horns={animal.horns}
          key={idx}
          openModalHandler={this.props.openModalHandler}
        />)
    });

    return (
      <main className="main-area">
        <p>Filter Beasts by the # of Horns</p>
        <Form>
          <Form.Label>Filter:</Form.Label>
          <Form.Select onChange={this.props.handleSelect}>
            <option>Choose # of Horns</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>100</option>
          </Form.Select>
        </Form>
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
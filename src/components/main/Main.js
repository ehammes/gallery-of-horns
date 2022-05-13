import React from 'react';
import HornedBeast from '../hornedBeast/HornedBeast.js'
import {Container, Row, Form} from 'react-bootstrap';
import './Main.css'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      selectedFilter: ''
    }
  }


handleSubmit = event =>{
  event.preventDefault();
  this.setState( {
    selectedFilter: event.target.selectedFilter.value,
  });
  console.log(this.state);
}

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
        <Form onClick={this.handleSubmit}>
          <Form.Label>Filter:</Form.Label>
          <Form.Select>
            <option></option>
            <option>placeholder</option>
            <option>placeholder</option>
            <option>placeholder</option>
            <option>placeholder</option>
            <option>placeholder</option>
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
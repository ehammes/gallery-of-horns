import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HornedBeast.css';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    }
  }

  likeImage = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  };

  handleImageClick = () => {
    this.props.openModalHandler(this.props.title, this.props.description, this.props.alt, this.props.imageURL)
  }

  render() {

    return (
      <Col className='mb-4 mt-4'>
        <Card
          border='dark'
          className='bg-light text-dark cards h-100'
        >
          <Card.Header 
            className='text-center'
            >
            {this.props.title}
          </Card.Header>
          <Card.Img
            variant="top"
            onClick= {() => {
              this.likeImage();
              this.handleImageClick();
              }}
            src={this.props.imageURL}
            alt={this.props.alt}
            title={this.props.title}
          />
          <Card.Body>
            <Card.Title>
              {this.props.description}
            </Card.Title>
            <Card.Text>
              # of Horns: {this.props.horns}
              <br/>
              👍: {this.state.votes} Likes
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default HornedBeast;
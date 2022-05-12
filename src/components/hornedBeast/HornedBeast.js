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
    this.props.openModalHandler(this.props.imageURL)
  }

  render() {
    // console.log(this.props.title);
    // console.log(this.props.src);
    // console.log(this.props.alt);
    // console.log(this.props.description);
    // console.log(this.props.idx);

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
            openModalHandler={this.props.openModalHandler}
          />
          <Card.Body>
            <Card.Title>
              {this.props.description}
            </Card.Title>
            <Card.Text>
              👍: {this.state.votes}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default HornedBeast;
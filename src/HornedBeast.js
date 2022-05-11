import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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


  render() {
    // console.log(this.props.title);
    // console.log(this.props.src);
    // console.log(this.props.alt);
    // console.log(this.props.description);
    // console.log(this.props.idx);

    return (
      <section>
        <Container>
          <Row xs={2} md={8} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                <Card
                  style={{ width: '30rem' }}
                >
                  <Card.Header>{this.props.title}</Card.Header>
                  <Card.Img
                    variant="top"
                    onClick={this.likeImage}
                    src={this.props.imageURL}
                    alt={this.props.alt}
                    title={this.props.title}
                  />
                </Card>
                <Card.Body>
                  <Card.Title>{this.props.description}</Card.Title>
                  <Card.Text>
                    👍: {this.state.votes}
                  </Card.Text>
                </Card.Body>
              </Col>
            ))}
          </Row>
        </Container>
        {/* <h2>{this.props.title}</h2>
        <p></p>
        <img
          onClick={this.likeImage}
          src={this.props.imageURL}
          alt={this.props.alt}
          title={this.props.title}
        />
        <p>{this.props.description}</p> */}
      </section>
    )
  }
}

export default HornedBeast;
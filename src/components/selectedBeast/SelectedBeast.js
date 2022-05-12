import React from 'react';
import {Modal} from 'react-bootstrap';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {

  render() {

    return (
      <Modal
        show={this.props.isModalDisplaying}
        onHide={this.props.closeModalHandler}
      >
        <Modal.Header closeButton>
        <Modal.Title>
          {this.props.selectedBeast.title}
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
            src ={this.props.selectedBeast.imageURL}
            alt = {this.props.selectedBeast.imageURL}
            height = '300vm'
            width = 'auto'
          ></img>
          <br />
          {this.props.selectedBeast.description}
        </Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast;
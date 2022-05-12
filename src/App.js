import React from 'react';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import Footer from './components/footer/Footer.js';
import data from './components/data.json';
import { Modal } from 'react-bootstrap';


import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: '',
    }
  }

  openModalHandler = (image, alt) => {
    this.setState({
      isModalDisplaying: true,
      beast: image,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isModalDisplaying: false
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          openModalHandler={this.openModalHandler}
        />
        <Footer />
        <Modal
          show={this.state.isModalDisplaying}
          onHide={this.closeModalHandler}
        >
          <Modal.Title><img src={this.state.beast} alt='' height='500em'/></Modal.Title>
        </Modal>
      </>
    );
  }
}


export default App;
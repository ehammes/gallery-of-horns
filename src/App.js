import React from 'react';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import Footer from './components/footer/Footer.js';
import data from './components/data.json';
import SelectedBeast from './components/selectedBeast/SelectedBeast.js'

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast:{},
      isModalDisplaying: false,
    }
  }

  openModalHandler = (title, description, alt, imageURL) => {
    let beast = {
      title: title,
      description: description,
      alt: alt,
      imageURL: imageURL,
    }
    this.setState({
      isModalDisplaying: true,
      selectedBeast: beast,
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
        <SelectedBeast 
          isModalDisplaying={this.state.isModalDisplaying}
          selectedBeast={this.state.selectedBeast}
          closeModalHandler={this.closeModalHandler}
        />
      </>
    );
  }
}


export default App;
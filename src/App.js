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
      data: data
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

  handleSelect = event => {
    let filter = event.target.value;
    if (filter === '1') {
      let oneHorn = data.filter(num => num.horns === 1);
      this.setState({
        data: oneHorn
      })
    } else if (filter === '2') {
      let twoHorn = data.filter(num => num.horns === 2);
      this.setState({
        data: twoHorn
      })
    } else if (filter === '3') {
      let threeHorn = data.filter(num => num.horns === 3);
      this.setState({
        data: threeHorn
      })
    } else if (filter === '100') {
      let hundredHorn = data.filter(num => num.horns === 100);
      this.setState({
        data: hundredHorn
      })
    } else {
      this.setState({
        data: data
      })
    }
  }

  render() {
    return (
      <>
        <Header />
        <Main
          data={this.state.data}
          openModalHandler={this.openModalHandler}
          handleSelect={this.handleSelect}
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
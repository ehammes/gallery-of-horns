import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css'
import data from './data.json';

class Main extends React.Component {

  render() {

    let beast = [];
    data.forEach((animal, idx) => {
      // console.log(animal.image_url);
      beast.push(
        <HornedBeast
          imageURL={animal.image_url}
          title={animal.title}
          alt={animal.keyword}
          description={animal.description}
          key={idx}
          idx={idx}
        />)
    });

    return (
      <main className="main-area">
        {beast}
        {/* <HornedBeast
          title='UniWhal'
          imageURL="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          description='A unicorn and a narwhal nuzzling their horns'
          alt='narwhal'
        />
        <HornedBeast
          title='Rhino Family'
          imageURL="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
          description='Parent rhino with two babies'
          alt='rhino'
        /> */}
      </main>
    )
  }
}

export default Main;
import React from 'react';

class HornedBeast extends React.Component {

  render() {
    // console.log(this.props.title);
    // console.log(this.props.src);
    // console.log(this.props.alt);
    // console.log(this.props.description);

    return (
      <section>
        <h2>{this.props.title}</h2>
        <img src={this.props.src} alt={this.props.alt} title={this.props.title}/>
        <p>{this.props.description}</p>  
      </section>
    )
  }
}

export default HornedBeast;
import React from "react";

class Pokecard extends React.Component {
  render(props) {
    return (
      <div style={{ padding: 20 }}>
        <p> ID: {this.props.id}</p>
        <h1> {this.props.name} </h1>
        <h3> {this.props.type} type </h3>
        <p> Base Exp: {this.props.baseexp}</p>
      </div>
    );
  }
}

export default Pokecard;

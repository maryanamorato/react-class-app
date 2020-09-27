import React from "react";
import Button from "./Button";

//card component, styled and adapted to my store context
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bought: this.props.bought,
      image: this.props.image,
      name: this.props.name,
      index: this.props.index,
    };
  }

  render() {
    return (
      // using div, img and p elements and button component in the card component, because it matches the context of my application
      <div style={style.card}>
        <img
          style={this.state.bought ? style.boughtImage : style.image}
          src={this.state.image}
          alt={this.state.name}
        ></img>
        <p style={style.title}>{this.state.name}</p>
        <Button
          text="Comprar"
          onClick={() => {
            this.props.buy(this.state.index);
            this.setState({ bought: true });
          }}
        />
        <Button
          text="Devolver"
          onClick={() => {
            this.props.refund(this.state.index);
            this.setState({ bought: false });
          }}
        />
      </div>
    );
  }
}

const style = {
  card: {
    display: "flex",
    flexDirection: "column",
    width: 150,
    padding: 20,
    margin: 20,
    borderRadius: 10,
    boxShadow: "17px 17px 30px -4px rgba(0,0,0,0.45)",
  },
  image: {
    margin: "0 auto",
    width: 100,
    height: 100,
  },
  boughtImage: {
    margin: "0 auto",
    width: 100,
    height: 100,
    filter: "grayscale(100%)",
  },
  button: {
    backgroundColor: "#ffd73c",
    border: "1px solid #000",
    padding: 5,
    marginTop: 5,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default Card;

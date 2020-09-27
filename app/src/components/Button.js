import React from "react";

//general button component, already styled
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      onClick: this.props.onClick,
    };
  }

  render() {
    return (
      // using the button element in the component
      <button style={style.button} onClick={this.state.onClick}>
        {this.state.text}
      </button>
    );
  }
}

const style = {
  button: {
    backgroundColor: "#ffd73c",
    border: "1px solid #000",
    padding: 5,
    marginTop: 5,
  },
};

export default Button;

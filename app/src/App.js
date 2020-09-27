import React from "react";
import axios from "axios";
import Card from "./components/Card"

// main file, where i set the functions behavior and components display

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipments: [],
    };

    this.fetchData();
  }

  fetchData = async () => {
    const res = await axios.get("http://localhost:3005/equipments");
    if (res.data) {
      this.setState({ equipments: res.data });
    }
  };

  buy = async index => {
    const equipment = this.state.equipments[index];
    await axios.put(
      `http://localhost:3005/equipments/${equipment._id}`,
      {...equipment, bought: true}
    );
    this.fetchData();
  };

  refund = async index => {
    const equipment = this.state.equipments[index];
    await axios.put(
      `http://localhost:3005/equipments/${equipment._id}`,
      {...equipment, bought: false}
    );
    this.fetchData();
  };

  render() {
    return (
      <div style={style.main}>
        {this.state.equipments.map((equipment, index) => (
          <Card key={index} index={index} buy={this.buy} refund={this.refund} {...equipment} />
        ))}
      </div>
    );
  }
}

const style = {
  main: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
};

export default App;

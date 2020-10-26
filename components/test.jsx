import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.fncAlert = (arg) => {
      console.log(arg);
      this.setState({cnt: arg + 1})
    };

    this.state = {
      profiles: {
        chloe: {
          name: "chloe",
          age: "18",
          sexe: "f",
        },
        gerare: {
          name: "gerare",
          age: "40",
          sexe: "m",
        },
        Lea: {
          name: "Lea",
          age: "25",
          sexe: "f",
        },
      },
      cnt: 0,
    };

    console.log("this.props.name, :", this.props.name);
    console.log("this.state, :", this.state);
  }
  render() {
    return (
      <div>
        <h2>{this.props.name} </h2>
        <h2>State</h2>
        <ul>
          <li>{this.state.profiles.chloe.name}</li>
          <li>{this.state.profiles.gerare.name}</li>
        </ul>
        <h2>Modifier le state avec une function</h2>


        <button
          className="btnchloe"
          onClick={() => {
            this.fncAlert(this.state.cnt);
            console.log("lol");
          }}
        >
          Chloe
        </button>

        <button
          className="btnPierre"
          onClick={() => {
            this.fncAlert(this.state.cnt);
            console.log("lol");
          }}
        >
          Pierre
        </button>


        <button
          className="btnLea"
          onClick={() => {
            this.fncAlert(this.state.cnt);
            console.log("lol");
          }}
        >
          Lea


        </button>
        <h1>{this.state.cnt}</h1>
      </div>
    );
  }
}

export default Test;

// this.state = {
//   title: "Facebook",
// };
// console.log(this.state);
// console.log(this.props);

import React from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
    };

    this.style = {
      container: {
        margin: "auto",
        marginTop: "1%",
        width: "60%",
        padding: "1% 0",
        marginLeft: "auto",
        marginRight: "1%",
        border: "black solid 2px",
        justifyContent: "center",
        backgroundColor: "#dddddd",
        borderRadius: 5,
      },
    };
  }
  render() {
    return (
      <div style={this.style.container}>

        <button className="btn" onClick={() => {this.props.handler("Jeanne");}}>
        Jeanne
        </button>

        <button className="btn" onClick={() => {this.props.handler("Martine");}}>
        Martine
        </button>

        <button className="btn" onClick={() => {this.props.handler("Claude");}}>
         Claude
        </button>

      </div>
    );
  }
}

export default Menu;

// this.state = {
//   title: "Facebook",
// };
// console.log(this.state);
// console.log(this.props);

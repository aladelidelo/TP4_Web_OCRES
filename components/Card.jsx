import React from "react";

class Cards extends React.Component {
  constructor(props) {
    super(props);



    let style = {
      container:{
        margin:"auto",
        height: '50%',
        width: "50%",
        padding: "center",
        border:"2px solid black",
        backgroundColor: "#dddddd",
        borderRadius: 10,
       },
      }

      let style2 = {
      container:{
        margin:"auto",
        height: '50%',
        width: "50%",
        padding: "center",
        border:"2px solid green",
        backgroundColor: "#ddffdd",
        borderRadius: 10,
       },
      }

    this.state = {
      style : style,
    };

    this.changeStyle = () => {
      if(this.state.style !==style2)
      {
          this.setState({style: style2});
      }
      else{
        this.setState({style: style});
      }
    };
  }
  render() {
    return (
     <div style={this.state.style.container}>
      <h1> {this.props.info.nom}</h1>
      <h1> {this.props.info.prenom}</h1>
      <h1> {this.props.info.dateDeNaissance}</h1>

      <button className="btn" onClick={this.changeStyle}>
      Bouton
      </button>
      </div>
    );
  }
}

export default Cards;

// this.state = {
//   title: "Facebook",
// };
// console.log(this.state);
// console.log(this.props);

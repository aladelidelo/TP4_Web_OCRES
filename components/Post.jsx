import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.like = () => {
        this.props.handler(this.props.info.lastPost.like + 1 )
    }

    this.state = {};
    this.style = {
      container: {
        margin: "auto",
        width: "50%",
        height: "25%",
        border: "black solid 2px",
        backgroundColor: "#dddddd",
        borderRadius: 10,
      },
    };
  }
  render() {
    return (
      <div style={this.style.container}>
        <p>{this.props.info.lastPost.post}</p>
        <p>{this.props.info.lastPost.like}</p>
        <button className="btn" onClick={this.like}>
          Like
        </button>
      </div>
    );
  }
}

export default Post;

// Passe state to child https://stackoverflow.com/questions/35537229/how-to-update-parents-state-in-react

// class Parent extends React.Component {
//   constructor(props) {
//     super(props)

//     this.handler = this.handler.bind(this)
//   }

//   handler() {
//     this.setState({
//       someVar: 'some value'
//     })
//   }

//   render() {
//     return <Child handler = {this.handler} />
//   }
// }

// class Child extends React.Component {
//   render() {
//     return <Button onClick = {this.props.handler}/ >
//   }
// }

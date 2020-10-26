import React from "react";
import Card from "./Card";
import Menu from "./Menu";
import Post from "./Post";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.handlerLike = this.handlerLike.bind(this);

    this.state = {
      curseur: "Jeanne",
      user: {
        Jeanne: {
          nom: "Dupont",
          prenom: "Jeanne",
          dateDeNaissance: "21/11/1996",
          lastPost: {
            post: "J'aime trop les pizzas",
            like: 0,
          },
        },
        Martine: {
          nom: "Dumoulin",
          prenom: "Martine",
          dateDeNaissance: "05/07/1982",
          lastPost: {
            post: "J'aime trop les bannanes",
            like: 0,
          },
        },
        Claude: {
          nom: "Dekolanta",
          prenom: "Claude",
          dateDeNaissance: "03/01/1992",
          lastPost: {
            post: "J'aime trop les insectes",
            like: 0,
          },
        },
      },
    };
    this.style = {
      container: {
        margin: "auto",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
      menuContainer: {
        width: "95%",
        height: "20%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "1%",
      },
    };
  }

  handler(arg) {
    this.setState({
      curseur: arg,
    });
  }
  handlerLike(newLike) {
    this.setState((state) => {
      state.user[state.curseur].lastPost.like = newLike;
      return state;
    });
  }
  render() {
    return (
      <div style={this.style.container}>
        <div style={this.style.menuContainer}>
          <Menu handler={this.handler} />
        </div>
        <Card info={this.state.user[this.state.curseur]} />
        <Post info={this.state.user[this.state.curseur]} handler={this.handlerLike} />
      </div>
    );
  }
}

export default Main;

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

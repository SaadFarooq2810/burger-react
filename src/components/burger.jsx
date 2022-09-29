import React, { Component } from "react";
import "../assets/style/burger.css";

class Burger extends Component {
  burgerBody = () => {
    let { lettuce, bacon, cheese, meat } = this.props.ingredients;
    let burger = [];
    for (let i = 0; i < lettuce; i++) {
      burger.push(
        <div
          key={burger.length}
          className="col-12 burger-lettuce m-1 mt-2 "
        ></div>
      );
    }
    for (let i = 0; i < bacon; i++) {
      burger.push(
        <div key={burger.length} className="col-12 burger-bacon m-1 mt-2"></div>
      );
    }
    for (let i = 0; i < cheese; i++) {
      burger.push(
        <div
          key={burger.length}
          className="col-12 burger-cheese m-1 mt-2"
        ></div>
      );
    }
    for (let i = 0; i < meat; i++) {
      burger.push(
        <div key={burger.length} className="col-12 burger-meat m-1 mt-2"></div>
      );
    }
    return burger;
  };

  state = {};
  render() {
    return <div className="row burger-ingredients">{this.burgerBody()}</div>;
  }
}

export default Burger;

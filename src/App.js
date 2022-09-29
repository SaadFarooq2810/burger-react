import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Burger from "./components/burger";
import Options from "./components/options";
import IngredientsPrice from "./utils/ingredientsPrice";
import "./App.css";
class App extends Component {
  state = {
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
    price: 0,
  };

  handleAddRemove = (option, item) => {
    let { lettuce, bacon, cheese, meat } = this.state;
    let stateValue;
    let statevaluePrice = this.state.price;
    let priceToAddRemove;
    switch (item) {
      case "lettuce": {
        stateValue = lettuce;
        priceToAddRemove = IngredientsPrice.lettuce;
        break;
      }
      case "bacon": {
        stateValue = bacon;
        priceToAddRemove = IngredientsPrice.bacon;
        break;
      }
      case "cheese": {
        stateValue = cheese;
        priceToAddRemove = IngredientsPrice.cheese;
        break;
      }
      case "meat": {
        stateValue = meat;
        priceToAddRemove = IngredientsPrice.meat;
        break;
      }
      default:
        break;
    }
    if (option === "add") {
      stateValue = stateValue + 1;
      statevaluePrice = statevaluePrice + priceToAddRemove;
    } else {
      stateValue = stateValue - 1;
      statevaluePrice = statevaluePrice - priceToAddRemove;
    }
    this.setState({
      [item]: stateValue >= 0 ? stateValue : 0,
      price:
        (statevaluePrice >= 0 && option === "add") ||
        (stateValue >= 0 && option === "remove")
          ? statevaluePrice
          : this.state.price,
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route
              path="/"
              element={
                <div className="burger-body">
                  <div className="burger-top burger-shadow "></div>
                  <Burger ingredients={this.state} />
                  <div className="burger-bottom burger-shadow "></div>
                </div>
              }
            />
            <Route path="/navbar" element={<NavBar />} />
          </Routes>
          <footer>
            <Options
              ingredients={this.state}
              onAddRemove={this.handleAddRemove}
            />
          </footer>
        </div>
      </>
    );
  }
}

export default App;

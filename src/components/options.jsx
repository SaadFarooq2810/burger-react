import React, { Component } from "react";
import "../assets/style/options.css";

class Options extends Component {
  state = {};
  render() {
    return (
      <div className="burger-options">
        <div className="burger-price">
          <h5 className="py-4">
            Current Price: {this.props.ingredients.price.toFixed(2)} $
          </h5>
        </div>
        <div className="ingredients-item">
          <h4 className="ingredient-name">Lettuce</h4>
          <button
            onClick={() => {
              this.props.onAddRemove("remove", "lettuce");
            }}
            className="btn btn-danger m-2"
          >
            Less
          </button>
          <button
            onClick={() => {
              this.props.onAddRemove("add", "lettuce");
            }}
            className="btn btn-primary"
          >
            More
          </button>
        </div>
        <div className="ingredients-item">
          <h4 className="ingredient-name">Bacon</h4>
          <button
            onClick={() => {
              this.props.onAddRemove("remove", "bacon");
            }}
            className="btn btn-danger m-2 "
          >
            Less
          </button>
          <button
            onClick={() => {
              this.props.onAddRemove("add", "bacon");
            }}
            className="btn btn-primary"
          >
            More
          </button>
        </div>
        <div className="ingredients-item">
          <h4 className="ingredient-name">cheese</h4>
          <button
            onClick={() => {
              this.props.onAddRemove("remove", "cheese");
            }}
            className="btn btn-danger m-2"
          >
            Less
          </button>
          <button
            onClick={() => {
              this.props.onAddRemove("add", "cheese");
            }}
            className="btn btn-primary"
          >
            More
          </button>
        </div>
        <div className="ingredients-item">
          <h4 className="ingredient-name">meat</h4>
          <button
            onClick={() => {
              this.props.onAddRemove("remove", "meat");
            }}
            className="btn btn-danger m-2 "
          >
            Less
          </button>
          <button
            onClick={() => {
              this.props.onAddRemove("add", "meat");
            }}
            className="btn btn-primary"
          >
            More
          </button>
        </div>
      </div>
    );
  }
}

export default Options;

import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/prop-types
      value: props.percentage,
    };
  }

  addValue = () => {
    this.setState((prevValue) => {
      if (prevValue.value >= 100) {
        return null;
      }
      return {
        value: prevValue.value + 10,
      };
    });
  };

  lowerValue = () => {
    this.setState((prevValue) => {
      if (prevValue.value <= 0) {
        return null;
      }
      return {
        value: prevValue.value - 10,
      };
    });
  };

  render() {
    return (
      <>
        <p className="text-center">Текущий прогресс: {this.state.value}%</p>
        <div style={{ padding: 0 }} className="progress container mt-4">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={this.state.value}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="progressbar"
            style={{ width: `${this.state.value}%` }}
          ></div>
        </div>

        <div className="container mt-4 text-center">
          <button
            onClick={this.addValue}
            type="button"
            className="btn btn-success me-2"
          >
            +
          </button>
          <button
            onClick={this.lowerValue}
            type="button"
            className="btn btn-danger"
          >
            -
          </button>
        </div>
      </>
    );
  }
}

Progress.defaultProps = {
  percentage: 50,
};
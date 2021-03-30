import React, { Component } from "react";
import "./Input.css";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    let { data } = this.props;
    let field = (
      <div className="input__container">
        <label className="input__label" htmlFor={data.id}>
          {data.label}{" "}
        </label>
        <input
          className="input__inputBox"
          name={data.name}
          type={data.type}
          placeholder={data.value}
          required={data.required}
          value={this.state.value}
          onChange={this.handleChange}
          id={data.id}
        />
      </div>
    );

    if (data.type === "radio") {
      let field = data.options.map((option, i) => {
        return (
          <div className="input__radio" key={i}>
            <label className="input__radioLabel" htmlFor={option.name}>
              {option.label}
            </label>
            <input
              className="input__radioButton"
              type={data.type}
              name={option.name}
              value={option.value}
            />
          </div>
        );
      });

      return (
        <div className="input__radioContainer">
          <label id="input__label" htmlFor="">
            {data.label}
          </label>
          {field}
        </div>
      );
    }

    return <div className="input">{field}</div>;
  }
}

import React, { Component } from "react";
import "./Select.css";

export default class Select extends Component {
  render() {
    let { data } = this.props;

    return (
      <div className="select__Container">
        <label>{data.label}</label>
        <select placeholder={data.value}>
          {data.options.map((option) => {
            return <option key={option.id}>{option.value}</option>;
          })}
        </select>
      </div>
    );
  }
}

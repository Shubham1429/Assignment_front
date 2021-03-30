import React, { Component } from "react";
import Input from "./Input";
import Select from "./Select";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: this.props.data,
    };
  }

  render() {
    let incData = this.props.data;
    console.log("hello");
    let fields = incData.data?.data?.formData?.sections[0].fields;

    return (
      <div className="form">
        <p>Form</p>
        <form action="" className="form__container">
          {fields &&
            fields.map((field, i) => {
              const inpData = incData.data?.data?.fieldsData[field];
              if (!inpData) {
                return false;
              }
              switch (inpData?.type) {
                case "singleSelect":
                  return <Select key={i} data={inpData} />;
                default:
                  return <Input key={i} data={inpData} />;
              }
            })}
          <div className="form__button">
            <button type="Submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

import React from "react";

class Translator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Translator</h1>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Translator;

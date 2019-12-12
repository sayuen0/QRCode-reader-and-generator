import React from "react"
import QrReader from "react-qr-reader";

export default class QrCamera extends React.Component {
  state = {
    result: "no result!"
  };

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      });
    }
  };

  handleError = err => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{width: "40%"}}
        ></QrReader>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

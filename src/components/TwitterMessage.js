import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      counter: 0
    };
  }

  handleInput = (e) => {
    let message = e.target.value
    let counter = message.length
    if(counter < this.props.maxChars){
      this.setState({
        message,
        counter
    })
  }
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(e) => this.handleInput(e)}/>
        <strong> Current: {this.state.counter}, Max: {this.props.maxChars}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
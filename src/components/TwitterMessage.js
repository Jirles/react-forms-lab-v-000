import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      charactersLeft: this.props.maxChars - this.state.message.length
    };
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" id='twitterMessage' value={this.state.message} onChange={this.handleMessageChange}/>
        <small>Characters Left: {this.state.charactersLeft}</small>
      </div>
    );
  }
}

export default TwitterMessage;

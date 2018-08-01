import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      charactersLeft: this.props.maxChars - this.state.message.length
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" id='twitterMessage' value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;

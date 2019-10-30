import React, { Component } from 'react';

class SocialButton extends Component
{
  render()
  {
    const platform = "btn-social-" + this.props.name.toLowerCase();

    return (
        <button type="button" class={"btn " + platform}>{this.props.name}</button>
    );
  }
}

export default SocialButton;

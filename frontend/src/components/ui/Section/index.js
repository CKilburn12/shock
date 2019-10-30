import React, { Component } from 'react';

class Section extends Component
{

  render()
  {
    return (
        <div class="card w-75 my-3 mx-auto">
            <div class="card-body">
                {this.props.children}
            </div>
        </div>
    );
  }
}

export default Section;

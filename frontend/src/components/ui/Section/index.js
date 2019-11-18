import React, { Component } from 'react';

class Section extends Component
{

  render()
  {
    return (
        <div className="card w-75 my-3 mx-auto">
            <div className="card-body">
                {this.props.children}
            </div>
        </div>
    );
  }
}

export default Section;

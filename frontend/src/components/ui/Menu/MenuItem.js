import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MenuItem extends Component
{
  render()
  {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={this.props.path}>
              {this.props.title}
            </NavLink>
        </li>
    );
  }
}

export default MenuItem;

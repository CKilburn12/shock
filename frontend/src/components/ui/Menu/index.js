import React, { Component } from 'react';
import MenuItem from './MenuItem';

const Acronym = [
  ["Saintly", "Scared", "Secured", "Shaky", "Sickly", "Skewed", "Slow", "Smarmy"],
  ["Hairless", "Headstrong", "Hilarious", "Hortative", "Hungry", "Humane", "Humorless"],
  ["Obedient", "Obscure", "Occidental", "Odd", "Odorous", "Oily", "Ominous", "Opulent"]
];

class Menu extends Component
{
  getAcronym()
  {
    var output = "";
    for(var i = 0; i < Acronym.length; i++)
    {
      var rand = Math.round(Math.random() * Acronym[i].length);

      rand = Math.max(0, rand);
      rand = Math.min(rand, Acronym[i].length - 1);

      output += Acronym[i][rand] + " ";
    }

    output += "Cohabitation Kiosk";

    return output;
  }

  render()
  {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">
          <span role="img" aria-label="logo">{this.getAcronym()} ⚡</span>
        </div>
  
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {
              this.props.items.map((element, id) =>  <MenuItem id={id} title={element.title} path={element.path} />)
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;

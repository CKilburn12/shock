import React, { Component } from 'react';
import Section from '../../components/ui/Section';
import Form from '../../components/ui/Form';

class HousingView extends Component
{
  render()
  {
    return (
        <div>
            <Section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Section>
            <Section>
              <h5>Useful Links</h5>
              <ul>
                <li><a href="https://rpi.starrezhousing.com/StarRezPortal/Default.aspx">StarRez Housing Portal</a></li>
                <li><a href="https://info.rpi.edu/conference-services/housing-options">RPI Official Housing Information</a></li>
                <li><a href="https://rpirooms.com/">RPI Rooms</a></li>
                <li><a href="http://late.work/rpi-dorm-photos">LATE Room Photos</a></li>
              </ul>
            </Section>
        </div>
    );
  }
}

export default HousingView;

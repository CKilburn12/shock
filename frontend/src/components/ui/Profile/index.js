import React, { Component } from 'react';

import { Icons } from '../../../data/Icons';
import Section from '../Section';


class Profile extends Component
{

  getEmail(id, url)
  {
    return id + "@" + url;
  }

  getEmailLink(id, url)
  {
    return "mailto: " + this.getEmail(id, url);
  }

  getIcon(name, id)
  {    
    let prefix = Icons[name.toLowerCase()];
    let link = "";

    switch(name.toLowerCase())
    {
      case "email":
        link = "mailto: " + id + "@rpi.edu";
        break;
      case "instagram":
        link = "http://www.instagram.com/" + id;
        break;
      case "facebook":
        link = "http://www.facebook.com/" + id;
        break;
      case "twitter":
        link = "http://www.twitter.com/" + id;
        break;
      default:
        link = "#";
        break;
    }

    return (
      <li key={name}>  
        <i className={prefix + " fa-fw"}> </i>
        <a href={link}>{id}</a>
      </li>
    );
  }

  render()
  {
    let email = this.getEmail(this.props.id, "rpi.edu");
    let emailLink = this.getEmailLink(this.props.id, "rpi.edu");

    return (
        <Section>
          <h4 className="card-title text-center">
            {this.props.name}
          </h4>

          <div className="text-center">
            {this.props.major}
          </div>

          <div className="card-text">
            <h5>Bio</h5>
            <p>
              {this.props.bio}
            </p>

            <h5>Interests</h5>
          
            <ul>
              {
                this.props.interests.map((element, id) => <li key={id}>{element}</li>)
              }
            </ul>
            
            <h5>Contact</h5>
            <ul>
              <li key="email">
                <i className={Icons["email"] + " fa-fw"}> </i>
                <a href={emailLink}>{email}</a>
              </li>
              { 
                this.props.social.map((element, id) => this.getIcon(element.name, element.id)) 
              }
            </ul>

          </div>

        </Section>
    );
  }
}

export default Profile;
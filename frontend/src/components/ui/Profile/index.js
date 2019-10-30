import React, { Component } from 'react';
import Section from '../Section';

class Profile extends Component
{
  render()
  {
    return (
        <Section>
          <h4 className="card-title text-center">
            {this.props.name}
          </h4>

          <div className="card-text">
            <h5>Bio</h5>
            <p>
              {this.props.bio}
            </p>
            
            <h5>Contact</h5>
            <div>
              <i class="fa fa-envelope-o fa-fw"> </i>
              <a href={"mailto:" + this.props.id + "@rpi.edu"}>
                {this.props.id}@rpi.edu
              </a>
            </div>
            
            <div>
            <i class="fa fa-snapchat-ghost fa-fw"></i>
              <span>
                gmisail
              </span>
            </div>

            <div>
            <i class="fa fa-instagram fa-fw"></i>
              <a href={"https://www.instagram.com/" + this.props.instagramUsername}>
                {this.props.instagramUsername}
              </a>
            </div>
          </div>

        </Section>
    );
  }
}

export default Profile;
